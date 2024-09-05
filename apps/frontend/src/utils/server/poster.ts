'use server';

import { authOptions } from '@/fe/auth';
import { getServerSession } from 'next-auth';

export const poster = async <T>(url: string, body: T, isPublic = false) => {
  const session = await getServerSession(authOptions);

  if (isPublic) {
    return fetch(process.env.BACKEND_URL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  if (!session) {
    console.error('Unauthorized');
    return null;
  }

  return fetch(process.env.BACKEND_URL + url, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${session.backendToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};
