'use client';

import TitleAtom from '@/fe/components/atoms/title.atom';

export default function SignUpError() {
  return (
    <TitleAtom
      title="Unexpected error while rendering sign up page"
      className="text-pageDanger"
      center
    />
  );
}
