'use client';

import { Children } from '@/fe/utils/aliases.types';
import { SessionProvider } from 'next-auth/react';
import { ReactQueryProvider } from '@/fe/components/providers/react-query.provider';

type Props = {
  children: Children;
};

export const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </SessionProvider>
  );
};
