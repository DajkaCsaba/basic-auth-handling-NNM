'use server';
import LoginForm from './@loginFormSection/login-form';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import TitleAtom from '@/fe/components/atoms/title.atom';
import { authOptions } from '@/fe/auth';
import { getServerSession } from 'next-auth';
import { RowAtom } from '@/fe/components/atoms/layout/row.atom';

const LoginPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    return null;
  }

  return (
    <ColumnAtom
      inset="none"
      className={'justify-center items-center portrait:gap-lg gap-lgl'}
    >
      <ColumnAtom className={'!items-center justify-center'}>
        <RowAtom justify-start spacing="xl" spacingDirection="vertical">
          <TitleAtom size="xl" title="LogoBigHere" />
        </RowAtom>
        <RowAtom spacing="lg" spacingDirection="bottom">
          <TitleAtom
            className={'uppercase font-[900]  tracking-wider'}
            title={'Login'}
          />
        </RowAtom>
      </ColumnAtom>
    </ColumnAtom>
  );
};

export default LoginPage;
