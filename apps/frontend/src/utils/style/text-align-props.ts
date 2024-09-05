'use client';

import { TailwindStyle } from '@/fe/utils/aliases.types';
import { pickKeys } from '@/fe/utils/common/object-translators';

export type TextAlignProps = {
  left?: boolean;
  right?: boolean;
  center?: boolean;
  justified?: boolean;
};

type ResolverInputProps = {
  [propName: string]: unknown;
} & TextAlignProps;

/**
 * Resolves the text alignment from the given props.
 *
 * @example
 * resolveTextAlign({ left: true }) // returns 'text-left'
 *
 * @param props - Props containing 'left', 'right', 'center', and 'justified' boolean values.
 * @returns A tailwind class name string that can be used to set the text alignment.
 */
export const resolveTextAlign = (props: ResolverInputProps): TailwindStyle => {
  const textAlignProps = pickKeys(props, [
    'left',
    'right',
    'center',
    'justified',
  ]);

  const align = Object.entries(textAlignProps)
    .filter(([, value]) => value)
    .map(([key]) => `text-${key}`)
    .join(' ');

  return align;
};
