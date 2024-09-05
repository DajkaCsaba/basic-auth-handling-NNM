import { toast } from 'react-hot-toast';
import { ErrorMap, AuthError } from '@renter/common';

/**
 * Translates an auth error to a human-readable string and displays it to the user.
 * @param id A unique id for the toast notification.
 * @param error The error returned by the API.
 * @param unexpected A human-readable string that will be displayed if the error is not recognized.
 */
export const authErrorTranslator = (
  id: string,
  error: string,
  unexpected: string
): void => {
  const map: ErrorMap<AuthError> = {
    INVALID_CREDENTIALS: 'Invalid email or password',
    INVALID_TOKEN: 'Invalid token',
    USER_ALREADY_EXISTS: 'User already exists',
  };

  const errorText = map[error as keyof typeof map] || unexpected;
  console.error(error);
  console.error(errorText);
  toast.error(errorText, {
    id,
  });
};
