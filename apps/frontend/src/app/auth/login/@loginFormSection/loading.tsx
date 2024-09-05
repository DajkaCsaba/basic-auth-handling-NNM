import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import TitleAtom from '@/fe/components/atoms/title.atom';

export default function LoadingLoginFormSection() {
  return (
    <TitleAtom
      center
      className="animate-bounce"
      title="Loading Login form section..."
    />
  );
}
