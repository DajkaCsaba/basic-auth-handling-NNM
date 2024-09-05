import { Size, iconSizes } from '@/fe/utils/style/dynamic-sizes';
import { TailwindStyle } from '@/fe/utils/aliases.types';
import React from 'react';

type Props = {
  style?: TailwindStyle;
  size?: Size;
};

export const MenuIcon = ({ style = 'stroke-white', size = 'small' }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      className={`${style} ${iconSizes[size]} `}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4 4H22.5H41M4 22.5H22.5H41M4 41H41"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
};
