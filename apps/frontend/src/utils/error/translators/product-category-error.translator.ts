import { ErrorMap, ProductCategoryError } from '@renter/common';
import { toast } from 'react-hot-toast';

export const productCategoryErrorTranslator = (
  id: string,
  error: string,
  unexpected: string
) => {
  const map: ErrorMap<ProductCategoryError> = {
    ALREADY_EXIST_MODULE_NAME:
      'A megadott névvel már létezik termék kategória az Ön fiókjában...',
    NOT_FOUND_PRODUCT_CATEGORY:
      'Hiba történt! A termék kategória adatai nem szerepelnek az adatbázisunkban!',
    CATEGORY_HAS_PRODUCT:
      'Nem törölhetőek a termék kategória adatai, amíg a termék kategória tartalmazz termékeket!',
  };

  const errorText = map[error as keyof typeof map] || unexpected;
  console.error(error);
  console.error(errorText);
  toast.error(errorText, {
    id,
  });
};
