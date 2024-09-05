import { RowAtom } from '@/fe/components/atoms/layout/row.atom';
import TextAtom from '@/fe/components/atoms/text.atom';
import { Maybe } from '@/fe/utils/aliases.types';

type Props = {
  message: Maybe<string>;
};

/**
 * An atom component that displays an error message.
 *
 * @param {Props} props The props object.
 * @param {Maybe<string>} props.message The error message to display.
 *
 * @returns {JSX.Element} The error message component.
 */
const ErrorMessageAtom = ({ message }: Props): JSX.Element | null => {
  if (!message) {
    return null;
  }

  return (
    <RowAtom
      spacing="xxs"
      spacingDirection="top"
      className="bg-pageDanger rounded-base"
    >
      <TextAtom
        bold
        inset="xs"
        size="xxs"
        text={message}
        className="!text-white"
      />
    </RowAtom>
  );
};

export default ErrorMessageAtom;
