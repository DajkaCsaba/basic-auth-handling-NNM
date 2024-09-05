import TitleAtom from '@/fe/components/atoms/title.atom';

export default function Loading() {
  return (
    <TitleAtom
      center
      className="animate-bounce"
      title="Sign up page loading..."
    />
  );
}
