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
  };

  return { email, setEmail, isLoading, onRequest };
};
