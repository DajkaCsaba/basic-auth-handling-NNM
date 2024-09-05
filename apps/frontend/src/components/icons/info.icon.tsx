import React from 'react';
import { ICON_SIZES, Size } from '@/fe/utils/style/dynamic-sizes';

type Props = {
  className?: string;
  size?: Size;
};

export const InfoIcon = ({ className = 'fill-accent', size = 'sm' }: Props) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 40 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${ICON_SIZES[size]}`}
    >
      <path d="M17 9.81565C16.7239 10.0918 16.7239 10.5395 17 10.8157C17.2761 11.0918 17.7239 11.0918 18 10.8157C18.2761 10.5395 18.2761 10.0918 18 9.81565C17.7239 9.53951 17.2761 9.53951 17 9.81565Z" />
      <path d="M18.5 16.5C18.5 15.9477 18.0523 15.5 17.5 15.5C16.9477 15.5 16.5 15.9477 16.5 16.5H18.5ZM16.5 27.8137C16.5 28.366 16.9477 28.8137 17.5 28.8137C18.0523 28.8137 18.5 28.366 18.5 27.8137H16.5ZM29.5208 29.8958C36.1597 23.2569 36.1597 12.4931 29.5208 5.85418L28.1066 7.2684C33.9645 13.1263 33.9645 22.6237 28.1066 28.4816L29.5208 29.8958ZM5.47918 29.8958C12.1181 36.5347 22.8819 36.5347 29.5208 29.8958L28.1066 28.4816C22.2487 34.3395 12.7513 34.3395 6.8934 28.4816L5.47918 29.8958ZM5.47918 5.85418C-1.15973 12.4931 -1.15973 23.2569 5.47918 29.8958L6.8934 28.4816C1.03553 22.6237 1.03553 13.1263 6.8934 7.2684L5.47918 5.85418ZM6.8934 7.2684C12.7513 1.41053 22.2487 1.41053 28.1066 7.2684L29.5208 5.85418C22.8819 -0.784728 12.1181 -0.784728 5.47918 5.85418L6.8934 7.2684ZM16.5 16.5V27.8137H18.5V16.5H16.5ZM16.2929 9.10855C15.6262 9.77521 15.6262 10.8561 16.2929 11.5228L17.7071 10.1085C17.8215 10.2229 17.8215 10.4084 17.7071 10.5228L16.2929 9.10855ZM16.2929 11.5228C16.9596 12.1894 18.0404 12.1894 18.7071 11.5228L17.2929 10.1085C17.4073 9.99416 17.5927 9.99416 17.7071 10.1085L16.2929 11.5228ZM18.7071 11.5228C19.3738 10.8561 19.3738 9.77521 18.7071 9.10855L17.2929 10.5228C17.1785 10.4084 17.1785 10.2229 17.2929 10.1085L18.7071 11.5228ZM18.7071 9.10855C18.0404 8.44188 16.9596 8.44188 16.2929 9.10855L17.7071 10.5228C17.5927 10.6371 17.4073 10.6371 17.2929 10.5228L18.7071 9.10855Z" />
    </svg>
  );
};
