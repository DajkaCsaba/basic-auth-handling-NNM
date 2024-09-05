'use client';

import { Size, TEXT_SIZES } from '@/fe/utils/style/dynamic-sizes';
import { TailwindStyle } from '@/fe/utils/aliases.types';
import React from 'react';
import {
  resolveTextAlign,
  TextAlignProps,
} from '@/fe/utils/style/text-align-props';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';

type Props = {
  text: string;
  size?: Size;
  className?: TailwindStyle;
  bold?: boolean;
  onClick?: () => void;
} & TextAlignProps &
  InsetProps &
  SpacingProps;

/**
 * An atomic component for displaying text.
 *
 * @remarks
 *
 * This component takes care of styling the text according to the given props.
 * It also handles the onClick event if given.
 *
 * @param text - The text to be rendered.
 * @param className - Additional tailwind class names to be applied to the element.
 * @param size - The size of the text. Defaults to `'base'`.
 * @param bold - Whether the text should be bold or not. Defaults to `false`.
 * @param onClick - A function to be called when the element is clicked. Defaults to `() => void 0`.
 * @param props - Additional props to be spread to the element.
 *
 * @returns A JSX element with the specified styles and text.
 */
const TextAtom = ({
  text,
  className,
  size = 'base',
  bold = false,
  onClick = undefined,
  ...props
}: Props): JSX.Element => {
  const WEIGHT = bold ? 'font-bold' : 'font-normal';
  return (
    <p
      onClick={onClick}
      className={[
        className,
        TEXT_SIZES[size],
        WEIGHT,
        resolveTextAlign(props),
        resolveInsetStyle(props),
        resolveSpacingStyle(props),
        onClick ? 'cursor-pointer' : '',
      ].join(' ')}
    >
      {text}
    </p>
  );
};

export default TextAtom;
