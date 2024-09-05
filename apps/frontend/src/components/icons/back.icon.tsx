import React from 'react';
import { TailwindStyle } from '@/fe/utils/aliases.types';
import { iconSizes, Size } from '@/fe/utils/style/dynamic-sizes';

type Props = {
  style?: TailwindStyle;
  size?: Size;
};

export const BackIcon = ({
  style = 'fill-base-accent',
  size = 'small',
}: Props) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="-5 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style} ${iconSizes[size]}`}
    >
      <path d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM3 21.5H4V16.5H3V21.5Z" />
    </svg>
  );
};
