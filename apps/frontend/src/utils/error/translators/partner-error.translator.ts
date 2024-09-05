import { ErrorMap, PartnerError } from '@renter/common';
import { toast } from 'react-hot-toast';

export const partnerErrorTranslator = (
  id: string,
  error: string,
  unexpected: string
) => {
  const map: ErrorMap<PartnerError> = {
    ALREADY_EXIST_PARTNER_EMAIL:
      'Az email címmel már létezik Partner a rendszerünkben...',
    ALREADY_EXIST_PARTNER_VAT:
      'Az adószámmal már létezik Partner a rendszerünkben...',
    INVALID_PARTNER:
      'Hiba történt! A Partner adatai nem szerepelnek az adatbázisunkban!',
  };

  const errorText = map[error as keyof typeof map] || unexpected;
  console.error(error);
  console.error(errorText);
  toast.error(errorText, {
    id,
  });
};
