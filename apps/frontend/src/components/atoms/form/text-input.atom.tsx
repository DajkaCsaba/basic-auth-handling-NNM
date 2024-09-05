import { Size, TEXT_SIZES } from '@/fe/utils/style/dynamic-sizes';
import { InputTypes } from '@/fe/utils/aliases.types';
import React from 'react';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import { infoToast } from '@/fe/utils/toast/info.toast';
import { InfoIcon } from '@/fe/components/icons/info.icon';
import { UseFormRegisterReturn } from 'react-hook-form';
import { InsetProps, resolveInsetStyle } from '@/fe/utils/style/inset-props';
import {
  resolveSpacingStyle,
  SpacingProps,
} from '@/fe/utils/style/spacing-props';

type Props = {
  register: UseFormRegisterReturn;
  placeholder?: string;
  type?: InputTypes;
  className?: string;
  size?: Size;
  info?: string;
  onEnter?: () => void;
} & InsetProps &
  SpacingProps;

const BASE = `w-full border border-secondary text-dominant bg-transparent placeholder:text-secondary focus:outline-none`;
const LANDSCAPE = 'border-sml rounded-sml';
const PORTRAIT = 'portrait:border-sm portrait:rounded-sm';

/**
 * TextInputAtom is a component that renders a text input element, with
 * optional styling and features.
 *
 * @param {Props} props The component props.
 * @returns {JSX.Element} The rendered text input element.
 */
const TextInputAtom = ({
  placeholder,
  type = 'text',
  onEnter,
  className = '',
  size = 'sm',
  info,
  register,
  ...props
}: Props): JSX.Element => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!onEnter) {
      return;
    }
    if (e.key !== 'Enter') {
      return;
    }
    onEnter();
  };

  return (
    <div className={'relative flex-1 leading-[0]'}>
      <input
        type={type}
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
      {info && (
        <ColumnAtom
          onClick={() => infoToast(info)}
          className={
            '!absolute right-0 top-1/2 -translate-y-1/2 -translate-x-1/4'
          }
        >
          <InfoIcon size={'base'} />
        </ColumnAtom>
      )}
    </div>
  );
};

export default TextInputAtom;
