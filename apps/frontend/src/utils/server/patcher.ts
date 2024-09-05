'use server';

import { authOptions } from '@/fe/auth';
import { getServerSession } from 'next-auth';

export const patcher = async <T>(url: string, id: string, body: T) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    console.error('Unauthorized');
    return null;
  }

  return fetch(`${process.env.BACKEND_URL}${url}/${id}`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${session.backendToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
};
