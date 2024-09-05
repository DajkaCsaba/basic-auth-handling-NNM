import { Size, ICON_SIZES } from '@/fe/utils/style/dynamic-sizes';
import { Component, TailwindStyle } from '@/fe/utils/aliases.types';
import React from 'react';

type Props = {
  className?: TailwindStyle;
  size?: Size;
};

/**
 * A menu icon.
 *
 * @prop {Size} [size=sm] - Icon size.
 * @prop {TailwindStyle} [className=stroke-white] - Icon style.
 *
 * @returns {Component} A menu icon.
 */
export default function MenuIcon({
  className = 'stroke-white',
  size = 'sm',
}: Props): Component {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      className={`${className} ${ICON_SIZES[size]} `}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M4 4H22.5H41M4 22.5H22.5H41M4 41H41"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
