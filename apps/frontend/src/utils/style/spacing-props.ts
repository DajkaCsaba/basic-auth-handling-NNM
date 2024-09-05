'use client';

import { TailwindStyle } from '@/fe/utils/aliases.types';
import {
  MARGIN,
  Spacing,
  SpacingDirection,
} from '@/fe/utils/style/dynamic-spacing';

export type SpacingProps = {
  spacing?: Spacing;
  spacingDirection?: SpacingDirection;
};

type ResolverInputProps = {
  [propName: string]: unknown;
} & SpacingProps;

/**
 * Resolves the tailwind style for a given spacing and spacing direction.
 * @param {{spacing?: Spacing, spacingDirection?: SpacingDirection}} props
 * The props to resolve the spacing style from.
 * @returns {TailwindStyle} The resolved tailwind style.
 * @example
 * const style = resolveSpacingStyle({
 *   spacing: 'xl',
 *   spacingDirection: 'top',
 * });
 * // style is now 'portrait:mt-xl mt-xll'
 */
export const resolveSpacingStyle = ({
  spacing = 'none',
  spacingDirection = 'all',
}: ResolverInputProps): TailwindStyle => {
  return MARGIN[spacingDirection][spacing];
};
