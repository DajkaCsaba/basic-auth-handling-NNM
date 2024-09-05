import { Size, iconSizes } from '@/fe/utils/style/dynamic-sizes';
import React from 'react';

type Props = {
  size?: Size;
  style?: string;
};

export const ConfirmIcon = ({
  size = 'big',
  style = 'stroke-pageOrange',
}: Props) => {
  return (
    <svg
      width="40"
      height="27"
      viewBox="0 0 40 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style} ${iconSizes[size]}`}
    >
      <path
        d="M1 13.5L13.5 26L38.5 1"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
