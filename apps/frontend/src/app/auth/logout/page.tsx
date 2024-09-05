'use client';

import React from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { RowAtom } from '@/fe/components/atoms/layout/row.atom';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import TitleAtom from '@/fe/components/atoms/title.atom';
import TextAtom from '@/fe/components/atoms/text.atom';
import CancelButtonMolecule from '@/fe/components/molecules/button/cancel-button.molecule';
import SubmitButtonMolecule from '@/fe/components/molecules/button/submit-button.molecule';

export default function LogoutPage() {
  const router = useRouter();
  const onLogout = async () => {
    await signOut({
      redirect: true,
      callbackUrl: '/api/auth/signin',
    });
  };

  return (
    <section className={'min-h-[90vh] flex justify-center items-center'}>
      <ColumnAtom className={'w-[40vw] items-center gap-base-landscape'}>
        <ColumnAtom className={'items-center gap-base-landscape'}>
          <RowAtom className="relative justify-center items-center">
            <TitleAtom center size="xl" title="LogoBigHere" />
          </RowAtom>
          <TitleAtom
            className={'uppercase font-[800] tracking-wider'}
            title="logout"
          />
        </ColumnAtom>
        <TextAtom text={'Are you sure you want to log out?'} />
        <RowAtom className={'w-full justify-evenly my-[5vh]'}>
          <CancelButtonMolecule
            text={'Cancel'}
            onClick={() => router.push('/')}
          />
          <SubmitButtonMolecule text={'Logout'} onClick={onLogout} />
        </RowAtom>
      </ColumnAtom>
    </section>
  );
}
