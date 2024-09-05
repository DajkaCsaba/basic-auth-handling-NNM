import { toast } from 'react-hot-toast';
import { ErrorMap, ProductError } from '@renter/common';

export const productErrorTranslator = (
  id: string,
  error: string,
  unexpected: string
) => {
  const map: ErrorMap<ProductError> = {
    ALREADY_EXIST_PRODUCT_NAME:
      'A megadott névvel már létezik termék a kategóriában...',
    NOT_FOUND_PRODUCT:
      'Hiba történt! A termék adatai nem szerepelnek az adatbázisunkban!',
    NOT_FOUND_PRODUCT_CATEGORY:
      'Hiba történt! A termék kategória adatai nem szerepelnek az adatbázisunkban!',
    INVALID_ADDRESS:
      'Hiba történt! A telephely adatai nem szerepelnek az adatbázisunkban!',
  };

  const errorText = map[error as keyof typeof map] || unexpected;
  console.error(error);
  console.error(errorText);
  toast.error(errorText, {
    id,
  });
};
