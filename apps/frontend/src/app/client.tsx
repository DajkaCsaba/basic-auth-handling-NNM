'use client';

import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import { useSession } from 'next-auth/react';
import TitleAtom from '../components/atoms/title.atom';
import NoSessionMolecule from '@/fe/components/molecules/no-session.molecule';
import { useFindCurrentUser } from '@/fe/data-access/auth';
import TextAtom from '@/fe/components/atoms/text.atom';

export const HomeClient = () => {
  const { data: session } = useSession();
  const user = useFindCurrentUser();

  if (!session) {
    return <NoSessionMolecule />;
  }

  return (
    <main className="flex portrait:h-[vh] h-[89.33vh] flex-1 flex-col px-[1vw] bg-base-dominant">
      <ColumnAtom inset="none" className="h-[80vh] w-full !justify-evenly">
        <TitleAtom center size="xl" title={`Hello there ${user?.firstName}!`} />
        <ColumnAtom className="portrait:w-full w-3/4 mx-auto portrait:gap-base gap-basel">
          <TextAtom text="This is a sample boilerplate project designed to simplify the setup and accelerate the development of new projects. The backend and frontend are separated and organized within an NX monorepo. For the backend, we use the NestJS framework, and for the frontend, we utilize Next.js. The project is configured to work with a MySQL database, and the Dockerfile is located in the root folder. The database includes a simple user table." />
          <TextAtom text="Implemented functionalities: Login, Registration, Logout, Forgot Password, along with several custom components and utilities." />
        </ColumnAtom>
      </ColumnAtom>
    </main>
  );
};
