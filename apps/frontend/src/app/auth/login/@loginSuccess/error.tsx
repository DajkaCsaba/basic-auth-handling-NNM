'use client';

import TitleAtom from '@/fe/components/atoms/title.atom';

export default function LoginSuccessError() {
  return (
    <TitleAtom
      title="Unexpected error while rendering login success page"
      className="text-pageDanger"
      center
    />
  );
}
