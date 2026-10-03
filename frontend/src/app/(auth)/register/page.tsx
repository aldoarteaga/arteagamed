'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { PatientRegistrationSchema } from '@eart/shared-types';

const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
  ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
});

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const raw = {
      fullName: formData.get('fullName') as string,
      dateOfBirth: formData.get('dateOfBirth') as string,
      address: formData.get('address') as string,
      countryOfOrigin: formData.get('countryOfOrigin') as string,
      preferredLanguage: formData.get('preferredLanguage') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      hasSpanishInsurance: formData.get('hasSpanishInsurance') === 'true',
      permanentMedications: (formData.get('permanentMedications') as string)
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
      consentTerms:
        formData.get('consentTerms') === 'on' ? (true as const) : (false as unknown as true),
      consentMedicalData:
        formData.get('consentMedicalData') === 'on' ? (true as const) : (false as unknown as true),
    };

    const parsed = PatientRegistrationSchema.safeParse(raw);
    if (!parsed.success) {
      setError(Object.values(parsed.error.flatten().fieldErrors).flat().join('. '));
      setLoading(false);
      return;
    }

    const { email, password, ...profile } = parsed.data;

    const attributes = [
      new CognitoUserAttribute({ Name: 'email', Value: email }),
      new CognitoUserAttribute({ Name: 'name', Value: profile.fullName }),
      new CognitoUserAttribute({ Name: 'phone_number', Value: profile.phone }),
      new CognitoUserAttribute({ Name: 'locale', Value: profile.preferredLanguage }),
    ];

    await new Promise<void>((resolve, reject) => {
      userPool.signUp(email, password, attributes, [], (err) => {
        if (err) return reject(err);
        resolve();
      });
    })
      .then(() => router.push('/login?registered=1'))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <main>
      <h1>Crear cuenta / Create account</h1>
      <form
        onSubmit={(e) => {
          void handleSubmit(e);
        }}
      >
        <input name="fullName" required placeholder="Full name" />
        <input name="dateOfBirth" type="date" required />
        <input name="address" required placeholder="Address" />
        <input name="countryOfOrigin" maxLength={2} required placeholder="Country code (ES, NL…)" />
        <select name="preferredLanguage" required>
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="nl">Nederlands</option>
          <option value="no">Norsk</option>
          <option value="fi">Suomi</option>
        </select>
        <input name="phone" type="tel" required placeholder="+34600000000" />
        <input name="email" type="email" required placeholder="email@example.com" />
        <input
          name="password"
          type="password"
          required
          minLength={10}
          placeholder="Password (min 10 chars)"
        />
        <label>
          <input name="hasSpanishInsurance" type="checkbox" value="true" />I have Spanish health
          insurance
        </label>
        <input name="permanentMedications" placeholder="Permanent medications (comma-separated)" />
        <label>
          <input name="consentTerms" type="checkbox" required />I accept the Terms of Use and
          Privacy Policy
        </label>
        <label>
          <input name="consentMedicalData" type="checkbox" required />I consent to the processing of
          my medical data (GDPR Art. 9)
        </label>
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Creating…' : 'Create account'}
        </button>
      </form>
    </main>
  );
}
