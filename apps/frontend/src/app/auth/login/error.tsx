'use client';

import TitleAtom from '@/fe/components/atoms/title.atom';

export default function LoginError() {
  return (
    <TitleAtom
      title="Unexpected error while rendering login page"
      className="text-pageDanger"
      center
    />
  );
}
