import { Size, TEXT_SIZES } from '@/fe/utils/style/dynamic-sizes';
import { Component } from '@/fe/utils/aliases.types';
import React, { KeyboardEvent } from 'react';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';
import EyeIcon from '@/fe/components/icons/eye.icon';
import ClosedEyeIcon from '@/fe/components/icons/closed-eye.icon';

type Props = {
  register: UseFormRegisterReturn;
  placeholder?: string;
  className?: string;
  size?: Size;
  onEnter?: () => void;
} & InsetProps &
  SpacingProps;

const BASE = `w-full border border-dominant text-secondary bg-transparent placeholder:text-dominant focus:outline-none `;
const LANDSCAPE = 'border-sml rounded-sml pr-mdl';
const PORTRAIT = 'portrait:border-sm portrait:rounded-sm portrait:pr-md';

/**
 * PasswordInputAtom is a component that renders a password input element,
 * with optional styling and features.
 *
 * @param {Props} props The component props.
 * @returns {JSX.Element} The rendered password input element.
 */
export default function PasswordInputAtom({
  placeholder,
  onEnter,
  className = '',
  size = 'sm',
  register,
  ...props
}: Props): Component {
  const [isHidden, setIsHidden] = React.useState(true);

  const toggleIsHidden = () => setIsHidden(!isHidden);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!onEnter) {
      return;
    }
    if (e.key !== 'Enter') {
      return;
    }
    onEnter();
  };

  return (
    <div className={'relative leading-[0]'}>
      <input
        type={isHidden ? 'password' : 'text'}
        placeholder={placeholder}
        onKeyDown={(e) => handleKeyDown(e)}
        className={[
          className,
          TEXT_SIZES[size],
          BASE,
          PORTRAIT,
          LANDSCAPE,
          resolveInsetStyle(props),
          resolveSpacingStyle(props),
          'tracking-wide leading-[1vw]',
        ].join(' ')}
        {...register}
      />
      <ColumnAtom
        onClick={toggleIsHidden}
        className={'absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/4'}
      >
        {isHidden ? (
          <EyeIcon className="stroke-dominant" />
        ) : (
          <ClosedEyeIcon className="stroke-dominant" />
        )}
      </ColumnAtom>
    </div>
  );
}
