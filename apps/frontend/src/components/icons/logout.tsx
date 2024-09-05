import React from 'react';
import { ICON_SIZES, Size } from '@/fe/utils/style/dynamic-sizes';

type Props = {
  size?: Size;
  style?: string;
};

export const LogoutIcon = ({ size = 'md', style = 'fill-accent' }: Props) => {
  return (
    <svg
      width="36"
      height="49"
      viewBox="0 0 36 49"
      fill="none"
      className={`${style} ${ICON_SIZES[size]}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0.5V0C0.723858 0 0.5 0.223858 0.5 0.5L1 0.5ZM27 0.5H27.5C27.5 0.223858 27.2761 0 27 0V0.5ZM27 39.5V40C27.2761 40 27.5 39.7761 27.5 39.5H27ZM1 39.5H0.5C0.5 39.6326 0.552678 39.7598 0.646447 39.8536L1 39.5ZM10 9.5H10.5C10.5 9.36739 10.4473 9.24021 10.3536 9.14645L10 9.5ZM10 48.5L9.64645 48.8536C9.78945 48.9966 10.0045 49.0393 10.1913 48.9619C10.3782 48.8845 10.5 48.7022 10.5 48.5H10ZM35.5 20L35.8536 20.3536C36.0488 20.1583 36.0488 19.8417 35.8536 19.6464L35.5 20ZM32.3536 16.1464C32.1583 15.9512 31.8417 15.9512 31.6464 16.1464C31.4512 16.3417 31.4512 16.6583 31.6464 16.8536L32.3536 16.1464ZM31.6464 23.1464C31.4512 23.3417 31.4512 23.6583 31.6464 23.8536C31.8417 24.0488 32.1583 24.0488 32.3536 23.8536L31.6464 23.1464ZM18.5 19.5C18.2239 19.5 18 19.7239 18 20C18 20.2761 18.2239 20.5 18.5 20.5V19.5ZM27.5 21.75C27.5 21.4739 27.2761 21.25 27 21.25C26.7239 21.25 26.5 21.4739 26.5 21.75H27.5ZM26.5 18.25C26.5 18.5261 26.7239 18.75 27 18.75C27.2761 18.75 27.5 18.5261 27.5 18.25H26.5ZM1 1H27V0H1V1ZM1.5 39.5V0.5H0.5V39.5H1.5ZM0.646447 0.853553L9.64645 9.85355L10.3536 9.14645L1.35355 0.146447L0.646447 0.853553ZM0.646447 39.8536L9.64645 48.8536L10.3536 48.1464L1.35355 39.1464L0.646447 39.8536ZM9.5 9.5V39.5H10.5V9.5H9.5ZM9.5 39.5V48.5H10.5V39.5H9.5ZM27 39H10V40H27V39ZM27 20.5H35.5V19.5H27V20.5ZM27 19.5H18.5V20.5H27V19.5ZM35.1464 19.6464L33.3964 21.3964L34.1036 22.1036L35.8536 20.3536L35.1464 19.6464ZM33.3964 21.3964L31.6464 23.1464L32.3536 23.8536L34.1036 22.1036L33.3964 21.3964ZM26.5 21.75V39.5H27.5V21.75H26.5ZM35.8536 19.6464L34.1036 17.8964L33.3964 18.6036L35.1464 20.3536L35.8536 19.6464ZM34.1036 17.8964L32.3536 16.1464L31.6464 16.8536L33.3964 18.6036L34.1036 17.8964ZM26.5 0.5V18.25H27.5V0.5H26.5Z" />
    </svg>
  );
};
