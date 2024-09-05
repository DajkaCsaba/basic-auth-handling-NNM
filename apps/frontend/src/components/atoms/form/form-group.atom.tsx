'use client';

import React from 'react';
import { Children, Component, TailwindStyle } from '@/fe/utils/aliases.types';

type Props = {
  children: Children;
  breakOnMobile?: boolean;
  className?: TailwindStyle;
};

const BASE: TailwindStyle = 'flex portrait:gap-base gap-basel';

/**
 * FormGroupAtom is a component that wraps its children in a div with
 * a flex layout. On mobile devices (portrait mode), it will stack the
 * children vertically instead of horizontally, if the `breakOnMobile` property is true.
 *
 * @param {React.ReactNode} children - The children to be wrapped in the div.
 * @param {string} [className] - Additional CSS classes to be applied to the div.
 * @param {boolean} [breakOnMobile] - Whether to break the flex layout on mobile devices.
 * @return {React.ReactElement} A div element with the specified className and children.
 */
export const FormGroupAtom = ({
  children,
  className,
  breakOnMobile = false,
}: Props): Component => {
  const breakOnMobileClass = breakOnMobile ? 'portrait:flex-col' : '';
  return (
    <div className={[BASE, className, breakOnMobileClass].join(' ')}>
      {children}
    </div>
  );
};
