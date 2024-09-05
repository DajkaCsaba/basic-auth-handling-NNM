import { Children } from '@/fe/utils/aliases.types';

export default async function LoginLayout({
  children,
  signUpFormSection,
}: {
  children: Children;
  signUpFormSection: Children;
}) {
  return (
    <main className="w-screen h-screen bg-gradient-to-tl from-dominant via-accent to-secondary">
      {children}
      {signUpFormSection}
    </main>
  );
}
