'use server';

import { authOptions } from '@/fe/auth';
import { getServerSession } from 'next-auth';

export const fetcher = async (url: string) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.error('Unauthorized');
    return null;
  }

  return fetch(process.env.BACKEND_URL + url, {
    headers: {
      authorization: `Bearer ${session.backendToken}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};
