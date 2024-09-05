import { Children } from '@/fe/utils/aliases.types';

export default async function LoginLayout({
  children,
}: {
  children: Children;
}) {
  return (
    <main className="w-screen h-[89.33vh] bg-gradient-to-tl from-dominant via-accent to-secondary">
      {children}
    </main>
  );
}
