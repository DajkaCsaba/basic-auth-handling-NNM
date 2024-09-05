import { Children } from '@/fe/utils/aliases.types';

export default async function SetPasswordLayout({
  children,
}: {
  children: Children;
}) {
  return (
    <main className="w-screen h-screen bg-gradient-to-tl from-base-dominant via-base-accent to-base-secondary">
      {children}
    </main>
  );
}
