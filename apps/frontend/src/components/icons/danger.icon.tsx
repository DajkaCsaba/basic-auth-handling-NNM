import React from 'react';
import { iconSizes, Size } from '@/fe/utils/style/dynamic-sizes';

type Props = {
  style?: string;
  size?: Size;
};

export const DangerIcon = ({
  style = 'fill-pageDanger',
  size = 'small',
}: Props) => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${style} ${iconSizes[size]}`}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38ZM21.5 21.5C21.5 22.8807 20.3807 24 19 24V24C17.6193 24 16.5 22.8807 16.5 21.5V9.5C16.5 8.11929 17.6193 7 19 7V7C20.3807 7 21.5 8.11929 21.5 9.5V21.5ZM19 28C20.3807 28 21.5 29.1193 21.5 30.5C21.5 31.8807 20.3807 33 19 33C17.6193 33 16.5 31.8807 16.5 30.5C16.5 29.1193 17.6193 28 19 28Z"
      />
    </svg>
  );
};
