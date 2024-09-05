'use client';

import React from 'react';
import { Size, TEXT_SIZES } from '@/fe/utils/style/dynamic-sizes';
import { TailwindStyle } from '@/fe/utils/aliases.types';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';
import {
  resolveTextAlign,
  TextAlignProps,
} from '@/fe/utils/style/text-align-props';

type Props = {
  title: string;
  size?: Size;
  className?: TailwindStyle;
} & InsetProps &
  SpacingProps &
  TextAlignProps;

const BASE = 'font-[900] text-secondary portrait:my-lg my-lgl';

/**
 * An atomic component for displaying a title.
 *
 * @remarks
 *
 * This component takes care of styling the title according to the given props.
 *
 * @param title - The text to be rendered as the title.
 * @param className - Additional tailwind class names to be applied to the element.
 * @param size - The size of the title. Defaults to `'lg'`.
 * @param props - Additional props to be spread to the element.
 *
 * @returns A JSX element with the specified styles and text.
 */
const TitleAtom = ({ title, className = '', size = 'lg', ...props }: Props) => {
  return (
    <p
      className={[
        className,
        BASE,
        TEXT_SIZES[size],
        resolveTextAlign(props),
        resolveSpacingStyle(props),
        resolveInsetStyle(props),
      ].join(' ')}
    >
      {title}
    </p>
  );
};

export default TitleAtom;
