import React from 'react';
import { iconSizes, Size } from '@/fe/utils/style/dynamic-sizes';

type Props = {
  style?: string;
  size?: Size;
};

export const AddIcon = ({ style = '', size = 'small' }: Props) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style} ${iconSizes[size]}`}
    >
      <path
        d="M11.5 18H24.5M18 11.5V24.5M18 33.5V33.5C26.5604 33.5 33.5 26.5604 33.5 18V18C33.5 9.43959 26.5604 2.5 18 2.5V2.5C9.43959 2.5 2.5 9.43959 2.5 18V18C2.5 26.5604 9.43959 33.5 18 33.5Z"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};
