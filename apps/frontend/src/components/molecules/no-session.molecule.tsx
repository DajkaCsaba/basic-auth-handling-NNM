import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import TitleAtom from '@/fe/components/atoms/title.atom';
import { Component } from '@/fe/utils/aliases.types';
import React from 'react';

/**
 * Molecule to be used when there is no session, it will fill the entire screen and show a loading animation.
 *
 * @returns A JSX element.
 */
export default function NoSessionMolecule(): Component {
  return (
    <ColumnAtom className="z-[100] absolute bg-base-secondary w-screen !h-screen top-0 left-0 items-center justify-evenly bg-gradient-to-tl from-base-dominant via-base-accent to-base-secondary">
      <TitleAtom title="Logo" />
      <TitleAtom className="animate-bounce" center title="Loading data..." />
    </ColumnAtom>
  );
}
