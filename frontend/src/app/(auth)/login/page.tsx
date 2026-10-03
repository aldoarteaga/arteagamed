'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';

const userPool = new CognitoUserPool({
  UserPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID!,
  ClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID!,
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authDetails = new AuthenticationDetails({ Username: email, Password: password });

    await new Promise<void>((resolve, reject) => {
      user.authenticateUser(authDetails, {
        onSuccess: () => resolve(),
        onFailure: (err: Error) => reject(err),
      });
    })
      .then(() => router.push('/portal'))
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }

  return (
    <main>
      <h1>Iniciar sesión / Log in</h1>
      <form
        onSubmit={(e) => {
          void handleSubmit(e);
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        {error && <p role="alert">{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Loading…' : 'Login'}
        </button>
      </form>
      <a href="/register">Create account</a>
    </main>
  );
}
