import { iconSizes, Size } from '@/fe/utils/style/dynamic-sizes';
import React from 'react';

type Props = {
  style?: string;
  size?: Size;
};

export const SuccessIcon = ({
  style = 'fill-[#5EDD60]',
  size = 'small',
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      className={`${style} ${iconSizes[size]}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20C39.5 30.7696 30.7696 39.5 20 39.5ZM25.7896 11.3948C25.3385 11.1693 24.7901 11.3149 24.5103 11.7345L17 23L14.7071 20.7071C14.3166 20.3166 13.6834 20.3166 13.2929 20.7071L11.6814 22.3186C11.3011 22.6989 11.2897 23.312 11.6557 23.7062L15.7878 28.1561C16.6634 29.0991 18.1889 28.9817 18.9099 27.9158L28.361 13.9447C28.6995 13.4442 28.5203 12.7602 27.9799 12.4899L25.7896 11.3948Z"
      />
    </svg>
  );
};
