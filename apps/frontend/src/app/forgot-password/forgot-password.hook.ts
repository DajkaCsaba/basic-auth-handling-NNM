import { requestPasswordModifyMutation } from '@/fe/server/mutations/auth/request-password-modify.mutation';
import { useState } from 'react';
import toast from 'react-hot-toast';

export const useForgotPasswordHook = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const onRequest = () => {
    setLoading(true);
    const toastId: string = toast.loading(
      "We'll send you an email with a link to reset your password"
    );
    requestPasswordModifyMutation(email)
      .then((res) => {
        if (res.error) {
          toast.error(res.error, { id: toastId });
          return null;
        }
        if (res.unexpected) {
          console.error(res.unexpected);
          toast.error('Unexpected error attempting to send email with link', {
            id: toastId,
          });
          return null;
        }
        toast.success(res.success ?? '', { id: toastId });
        setEmail('');
      })
      .finally(() => setLoading(false));
  };

  return { email, setEmail, isLoading, onRequest };
};
