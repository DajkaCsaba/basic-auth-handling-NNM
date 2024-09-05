'use client';
import { ButtonAtom } from '@/fe/components/atoms/button/button.atom';
import { Component } from '@/fe/utils/aliases.types';
import React from 'react';
import toast from 'react-hot-toast';

type Props = {
  text: string;
  isEnabled?: boolean;
  errorMessage?: string;
  onClick?: () => void;
};
/**
 * A molecule component that renders a submit button based on the given properties.
 *
 * If `isEnabled` is `false`, the button is rendered as a grayed out button with
 * a cancel role and an error message that is displayed when the button is clicked.
 *
 * If `isEnabled` is `true`, the button is rendered as a standard button with
 * a given `text` and `onClick` event handler.
 *
 * @param {string} text the text content of the button
 * @param {boolean} [isEnabled=true] whether the button is enabled or not
 * @param {string} [errorMessage=''] the error message to display when the button is disabled and clicked
 * @param {() => void} [onClick] the event handler to call when the button is clicked
 * @returns a React component
 */
export default function SubmitButtonMolecule({
  text,
  isEnabled = true,
  errorMessage = '',
  onClick,
}: Props): Component {
  if (!isEnabled) {
    return (
      <ButtonAtom
        className={'flex-1 !fill-pageGray !border-pageGray'}
        role={'cancel'}
        type={'filled'}
        inset={'base'}
        size={'base'}
        onClick={() => toast.error(errorMessage, { id: 'submit-btn-error' })}
      >
        {text}
      </ButtonAtom>
    );
  }

  return (
    <ButtonAtom
      className={'flex-1 font-[700]'}
      type="filled"
      inset={'base'}
      size={'base'}
      onClick={onClick}
    >
      {text}
    </ButtonAtom>
  );
}
