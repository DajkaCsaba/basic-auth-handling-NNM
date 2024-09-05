'use client';

import { TailwindStyle } from '@/fe/utils/aliases.types';
import { Inset, InsetDirection, PADDING } from '@/fe/utils/style/dynamic-inset';

export type InsetProps = {
  inset?: Inset;
  insetDirection?: InsetDirection;
};

type ResolverInputProps = {
  [propName: string]: unknown;
} & InsetProps;

/**
 * Resolves the tailwind style for a given inset and inset direction.
 * @param {{inset?: Inset, insetDirection?: InsetDirection}} props
 * The props to resolve the inset style from.
 * @returns {TailwindStyle} The resolved tailwind style.
 * @example
 * const style = resolveInsetStyle({
 *   inset: 'xl',
 *   insetDirection: 'top',
 * });
 * // style is now 'portrait:pt-xl pt-xll'
 */
export const resolveInsetStyle = ({
  inset = 'none',
  insetDirection = 'all',
}: ResolverInputProps): TailwindStyle => {
  return PADDING[insetDirection][inset];
};
