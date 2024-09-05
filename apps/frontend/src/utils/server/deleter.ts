'use server';

import { authOptions } from '@/fe/auth';
import { getServerSession } from 'next-auth';

export const deleter = async (url: string, id: string) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.error('Unauthorized');
    return null;
  }

  return fetch(`${process.env.BACKEND_URL}${url}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${session.backendToken}`,
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
};
