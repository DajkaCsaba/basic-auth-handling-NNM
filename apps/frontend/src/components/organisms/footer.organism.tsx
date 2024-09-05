'use client';
import { authorized, unauthorized } from '@/fe/links/footer.links';
import { Link } from '@/fe/utils/aliases.types';
import React from 'react';
import { useSession } from 'next-auth/react';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import TitleAtom from '../atoms/title.atom';
import TextAtom from '@/fe/components/atoms/text.atom';

export const Footer = () => {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  const renderHelper = () => {
    const links: Link[] = session ? authorized : unauthorized;

    return (
      <ul className="portrait:hidden flex flex-wrap portrait:items-center portrait:justify-evenly portrait:gap-lg gap-lgl text-white portrait:text-base text-basel">
        {links.map((link: Link, index) => (
          <li
            key={link.key}
            className={`${
              index < links.length - 1
                ? 'landscape:border-r-[0.1vw] landscape:border-white landscape:pr-[1.67vw]'
                : 'landscape:pr-[1.67vw]'
            }`}
          >
            <a
              href={link.href}
              className="portrait:text-sm text-sml text-accent"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="fixed border-t border-t-accent bottom-[0] w-[100vw] portrait:h-[6.94vh] h-[3vw] portrait:gap-[2.96vh] gap-[1.67vw] bg-secondary flex flex-wrap portrait:flex-col items-center justify-between portrait:justify-center">
      <ColumnAtom className="portrait:hidden w-[15vw] portrait:h-[7.5vw] h-[3vw] justify-center items-center portrait:mt-[1vh]">
        <TitleAtom size="md" className="!text-accent" title="LogoHere" />
      </ColumnAtom>
      <div className="flex portrait:flex-col portrait:gap-[0.75vh] gap-[1.67vw] justify-evenly items-center portrait:w-[65%] w-[50%] portrait:my-[1vh]">
        <TextAtom
          size="xs"
          center
          className="text-dominant -translate-x-1/2"
          text={`CompanyNameHere © ${new Date(
            Date.now()
          ).getFullYear()} | All Rights Reserved`}
        />
        {renderHelper()}
      </div>
    </div>
  );
};
