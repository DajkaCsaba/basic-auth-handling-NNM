'use client';

import { Children, TailwindStyle } from '@/fe/utils/aliases.types';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';
import React from 'react';

type Props = {
  children: Children;
  className?: TailwindStyle;
  onClick?: () => void;
} & InsetProps &
  SpacingProps;

/**
 * A div that lays out its children vertically, with optional inset and
 * spacing styles. If `onClick` is provided, the div will be styled as a
 * clickable element.
 *
 * @example
 * <ColumnAtom onClick={() => console.log('clicked')}>
 *   <div>Hello</div>
 *   <div>World</div>
 * </ColumnAtom>
 */

export const ColumnAtom = ({
  children,
  className = '',
  onClick = undefined,
  ...props
}: Props): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className={[
        className,
        onClick ? 'cursor-pointer' : '',
        'flex flex-col',
        resolveInsetStyle(props),
        resolveSpacingStyle(props),
      ].join(' ')}
    >
      {children}
    </div>
  );
};
