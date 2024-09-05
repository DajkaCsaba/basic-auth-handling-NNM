'use client';

import TitleAtom from '@/fe/components/atoms/title.atom';

export default function SignUpFormError() {
  return (
    <TitleAtom
      title="Unexpected error while rendering sign up page form"
      className="text-pageDanger"
      center
    />
  );
}
