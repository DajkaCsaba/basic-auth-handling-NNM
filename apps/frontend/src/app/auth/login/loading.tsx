import TitleAtom from '@/fe/components/atoms/title.atom';

export default function LoadingLoginPage() {
  return (
    <TitleAtom
      center
      className="animate-bounce"
      title="Login page loading..."
    />
  );
}
