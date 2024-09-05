'use client';

import { Children, TailwindStyle } from '@/fe/utils/aliases.types';
import React from 'react';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';

type Props = {
  children: Children;
  className?: TailwindStyle;
  onClick?: () => void;
} & SpacingProps &
  InsetProps;

const BASE_STYLE: TailwindStyle =
  'flex items-center portrait:gap-base gap-basel';

/**
 * A div that lays out its children horizontally, with optional inset and
 * spacing styles. If `onClick` is provided, the div will be styled as a
 * clickable element.
 *
 * @example
 *
 * <RowAtom onClick={() => console.log('clicked')}>
 *   <TextAtom>Hello</TextAtom>
 *   <TextAtom>World</TextAtom>
 * </RowAtom>
 */

export const RowAtom = ({
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
        resolveSpacingStyle(props),
        resolveInsetStyle(props),
        BASE_STYLE,
        onClick ? 'cursor-pointer' : '',
      ].join(' ')}
    >
      {children}
    </div>
  );
};
