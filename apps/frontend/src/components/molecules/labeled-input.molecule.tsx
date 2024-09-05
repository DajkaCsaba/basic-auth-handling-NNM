import React from 'react';
import { Children, TailwindStyle } from '@/fe/utils/aliases.types';
import { Size } from '@/fe/utils/style/dynamic-sizes';
import TextAtom from '@/fe/components/atoms/text.atom';
import { RowAtom } from '@/fe/components/atoms/layout/row.atom';
import useIsPortrait from '@/fe/utils/hooks/is-portrait.hook';

type Props = {
  label: string;
  children: Children;
  className?: TailwindStyle;
  size?: Size;
  flex?: number;
  mobileHidden?: boolean;
  infoChildren?: Children;
};

/**
 * A molecule component representing a labeled input. It can be used to display
 * information about a form input element.
 *
 * @param {string} label The text to display as the label for the input.
 * @param {JSX.Element | JSX.Element[]} children The input element(s) to be displayed
 * below the label.
 * @param {TailwindStyle} [className] The tailwind style class to apply to the outer
 * element.
 * @param {Size} [size] The size of the text element containing the label.
 * @param {number} [flex] The flex value to apply to the outer element.
 * @param {boolean} [mobileHidden] Whether to hide the label on mobile devices.
 * @param {JSX.Element | JSX.Element[]} [infoChildren] The optional element(s) to
 * display to the right of the label.
 * @return {JSX.Element | JSX.Element[]} The JSX element representing the labeled
 * input molecule.
 */
const LabeledInputMolecule = ({
  label,
  children,
  className = '',
  size = 'sm',
  flex = 1,
  mobileHidden = false,
  infoChildren,
}: Props): JSX.Element | Children => {
  const isPortrait = useIsPortrait();

  if (mobileHidden && isPortrait) {
    return children;
  }

  return (
    <div
      style={{ flex: flex }}
      className={`${className} flex flex-col gap-small-landscape`}
    >
      <RowAtom className="justify-between">
        <TextAtom
          className={`${className}`}
          size={size}
          inset="none"
          bold
          text={label}
        />
        {infoChildren}
      </RowAtom>
      {children}
    </div>
  );
};

export default LabeledInputMolecule;
