import { Children, TailwindStyle } from '@/fe/utils/aliases.types';
import React from 'react';
import { Size, TEXT_SIZES } from '@/fe/utils/style/dynamic-sizes';
import {
  BASE,
  ButtonRole,
  ButtonType,
  COLOR,
  LANDSCAPE,
  PORTRAIT,
} from '@/fe/utils/style/button';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';

type Props = {
  children: Children;
  onClick?: () => void;
  className?: TailwindStyle;
  disabled?: boolean;
  role?: ButtonRole;
  type?: ButtonType;
  size?: Size;
} & InsetProps &
  SpacingProps;

/**
 * An atomic button component that can be composed into other components.
 *
 * @remarks
 * This component is intended to be used as a building block for other components.
 * It does not have any default styles or layout.
 *
 * @example
 * import { ButtonAtom } from '@/fe/components/atoms/button/button.atom';
 *
 * const MyButton = () => (
 *   <ButtonAtom onClick={() => console.log('clicked!')}>
 *     Click me!
 *   </ButtonAtom>
 * );
 *
 * @param {Props} props - The props for the button.
 * @returns {JSX.Element} The button element.
 */
export const ButtonAtom = ({
  children,
  onClick,
  className,
  disabled = false,
  role = 'normal',
  type = 'outlined',
  size = 'base',
  ...props
}: Props): JSX.Element => {
  return (
    <button
      className={[
        className,
        BASE,
        PORTRAIT,
        LANDSCAPE,
        COLOR[role][type],
        TEXT_SIZES[size],
        'justify-center',
        resolveInsetStyle(props),
        resolveSpacingStyle(props),
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
