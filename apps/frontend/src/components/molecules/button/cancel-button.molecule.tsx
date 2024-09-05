import { ButtonAtom } from '@/fe/components/atoms/button/button.atom';
import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};
/**
 * A molecule component that renders a cancel button based on the given properties.
 *
 * The button is rendered as a standard button with a given `text` and `onClick` event handler.
 *
 * @param {string} text the text content of the button
 * @param {() => void} onClick the event handler to call when the button is clicked
 * @returns a React component
 */
export default function CancelButtonMolecule({ text, onClick }: Props) {
  return (
    <ButtonAtom
      className={'flex-1 font-[700]'}
      role={'cancel'}
      inset={'base'}
      size={'base'}
      onClick={onClick}
    >
      {text}
    </ButtonAtom>
  );
}
