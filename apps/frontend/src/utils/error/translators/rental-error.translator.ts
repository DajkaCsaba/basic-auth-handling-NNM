import { toast } from 'react-hot-toast';
import { ErrorMap, RentalError } from '@renter/common';

export const rentalErrorTranslator = (
  id: string,
  error: string,
  unexpected: string
) => {
  const map: ErrorMap<RentalError> = {
    INVALID_CUSTOMER_ID:
      'Hiba történt! Az Ügyfél adatai nem szerepelnek az adatbázisunkban!',
    INVALID_PRODUCT_ID:
      'Hiba történt! A termék adatai nem szerepelnek az adatbázisunkban!',
    INVALID_PARTNER_ID:
      'Hiba történt! A Partner adatai nem szerepelnek az adatbázisunkban!',
    INVALID_SITE_ID:
      'Hiba történt! A telephely adatai nem szerepelnek az adatbázisunkban!',
  };

  const errorText = map[error as keyof typeof map] || unexpected;
  console.error(error);
  console.error(errorText);
  toast.error(errorText, {
    id,
  });
};
