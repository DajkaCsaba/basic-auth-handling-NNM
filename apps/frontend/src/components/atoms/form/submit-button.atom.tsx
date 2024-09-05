'use client';

import { Children, TailwindStyle } from '@/fe/utils/aliases.types';
import React from 'react';
import { Size, TEXT_SIZES } from '@/fe/utils/style/dynamic-sizes';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';
import {
  BASE,
  ButtonRole,
  ButtonType,
  COLOR,
  LANDSCAPE,
  PORTRAIT,
} from '@/fe/utils/style/button';

type Props = {
  children?: Children;
  text: string;
  pendingText: string;
  isPending?: boolean;
  style?: TailwindStyle;
  role?: ButtonRole;
  type?: ButtonType;
  size?: Size;
} & InsetProps &
  SpacingProps;

/**
 * An atomic component for displaying a form submit button.
 *
 * @remarks
 *
 * This component is meant to be used as a child of a {@link FormAtom} component.
 *
 * @param children - Optional elements to be rendered as children of the button.
 * @param style - Additional tailwind class names to be applied to the button.
 * @param text - The text to be rendered on the button when it is not pending.
 * @param pendingText - The text to be rendered on the button when it is pending.
 * @param isPending - Whether the button is pending or not. Defaults to `false`.
 * @param role - The role of the button, either `'normal'`, `'cancel'`, or `'danger'`. Defaults to `'normal'`.
 * @param type - The type of the button, either `'outlined'` or `'filled'`. Defaults to `'outlined'`.
 * @param size - The size of the button, either `'sm'`, `'base'`, or `'lg'`. Defaults to `'base'`.
 * @param ...props - Any additional props will be spread to the button element.
 *
 * @returns A button element with the specified styles and text.
 */
export const SubmitButtonAtom = ({
  children,
  style,
  text,
  pendingText,
  isPending = false,
  role = 'normal',
  type = 'outlined',
  size = 'base',
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={[
        style,
        TEXT_SIZES[size],
        BASE,
        PORTRAIT,
        LANDSCAPE,
        COLOR[role][type],
        resolveSpacingStyle(props),
        resolveInsetStyle(props),
      ].join(' ')}
      disabled={isPending}
      type="submit"
      aria-disabled={isPending}
    >
      {children}
      {isPending ? pendingText : text}
    </button>
  );
};
