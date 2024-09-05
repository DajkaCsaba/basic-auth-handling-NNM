import { HomeClient } from '@/fe/app/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/fe/auth';

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <></>;
  }

  return (
    <div
      className={
        'flex justify-center items-center w-full max-w-full overflow-x-clip'
      }
    >
      <HomeClient />
    </div>
  );
}
