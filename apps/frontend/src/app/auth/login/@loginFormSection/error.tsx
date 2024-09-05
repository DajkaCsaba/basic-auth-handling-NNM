'use client';

import TitleAtom from '@/fe/components/atoms/title.atom';

export default function LoginFormError() {
  return (
    <TitleAtom
      title="Unexpected error while rendering login page form"
      className="text-pageDanger"
      center
    />
  );
}
