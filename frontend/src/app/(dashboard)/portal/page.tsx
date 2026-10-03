'use client';

import { useEffect, useState } from 'react';
import type { PatientProfile } from '@eart/shared-types';

export default function PortalPage() {
  const [patient, setPatient] = useState<PatientProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    void fetchProfile();
  }, []);

  async function fetchProfile() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/patients/me`, {
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      });
      if (!res.ok) throw new Error('Failed to load profile');
      const json = (await res.json()) as { success: boolean; data: PatientProfile };
      setPatient(json.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading…</p>;
  if (error) return <p role="alert">{error}</p>;
  if (!patient) return null;

  return (
    <main>
      <h1>Welcome, {patient.fullName}</h1>
      <section>
        <h2>Subscription</h2>
        <p>Status: {patient.subscriptionStatus}</p>
        <p>Plan: {patient.subscriptionPlan ?? 'None'}</p>
        <a href="/portal/subscribe">Manage subscription</a>
      </section>
      <section>
        <h2>Your data</h2>
        <a href="/portal/profile">Edit profile</a>
        <a href="/portal/documents">My documents</a>
        <a href="/portal/export">Export my data (GDPR)</a>
        <a href="/portal/delete">Delete my account</a>
      </section>
    </main>
  );
}

function getAccessToken(): string {
  // Cognito stores tokens in localStorage under cognito-idp keys
  const keys = Object.keys(localStorage);
  const accessTokenKey = keys.find((k) => k.endsWith('.accessToken'));
  return accessTokenKey ? (localStorage.getItem(accessTokenKey) ?? '') : '';
}
