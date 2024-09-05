import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import TitleAtom from '@/fe/components/atoms/title.atom';
import Image from 'next/image';
import image from '../../../../public/img/RentNDeal.png';

export const LoginSuccessSection = () => {
  return (
    <ColumnAtom className="z-10 absolute bg-pageLightGray w-screen h-screen top-0 left-0 items-center justify-center bg-gradient-to-tl from-base-dominant via-base-accent to-base-secondary">
      <div className="relative w-[43.75vw] h-[19.11vw]">
        <Image alt="login-logo" src={image} className="" layout="fill" />
      </div>
      <TitleAtom title="You have successfully logged in!" />
      <TitleAtom className="animate-bounce" title="Loading Dashboard..." />
    </ColumnAtom>
  );
};
