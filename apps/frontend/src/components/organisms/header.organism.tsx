'use client';

import React from 'react';
import Link from 'next/link';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import { useSession } from 'next-auth/react';
import TextAtom from '@/fe/components/atoms/text.atom';
import TitleAtom from '../atoms/title.atom';
import LogoutIcon from '@/fe/components/icons/logout';

export const Header = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="top-0 w-[100vw] portrait:h-[6.94vh] h-[3vw] border-b border-b-accent bg-accent  flex items-center justify-between ">
      <div className="flex items-center portrait:gap-large gap-large-landscape">
        <ColumnAtom className="bg-secondary portrait:w-[20vw] w-[15vw] portrait:h-[6.94vh] h-[3vw] justify-center items-center">
          <Link href={'/'} className="relative">
            <TitleAtom
              size="md"
              className="portrait:hidden !text-accent"
              title="LogoHere"
            />
            <TitleAtom
              size="md"
              className="landscape:hidden !text-accent"
              title="LH"
            />
          </Link>
        </ColumnAtom>
      </div>
      {session && (
        <div className="flex items-center portrait:gap-base gap-basel">
          <ColumnAtom className="bg-secondary portrait:w-[20vw] w-[10vw] portrait:h-[6.94vh] h-[3vw] justify-center items-center">
            <Link href={'/api/auth/signout'}>
              <TextAtom
                size="sm"
                className={'portrait:hidden text-accent !font-[900]'}
                text={'Logout'}
              />
              <LogoutIcon size="md" className="landscape:hidden fill-accent" />
            </Link>
          </ColumnAtom>
        </div>
      )}
    </div>
  );
};
