import { authOptions } from '@/fe/auth';
import { Children, Component } from '@/fe/utils/aliases.types';
import { getServerSession } from 'next-auth';

export default async function LoginLayout({
  children,
  loginFormSection,
  loginSuccessSection,
}: {
  children: Children;
  loginFormSection: Component;
  loginSuccessSection: Component;
}) {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <main className="w-screen h-screen bg-gradient-to-tl from-dominant via-accent to-secondary">
        {loginSuccessSection}
      </main>
    );
  }

  return (
    <main className="w-screen h-screen bg-gradient-to-tl from-dominant via-accent to-secondary">
      {children}
      {loginFormSection}
    </main>
  );
}
