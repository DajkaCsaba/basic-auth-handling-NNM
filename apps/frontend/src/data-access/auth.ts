'use client';

import { poster } from '@/fe/utils/server/poster';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { authErrorTranslator } from '@/fe/utils/error/translators/auth-error.translator';
import { SignUpFormFields } from '@/fe/app/auth/sign-up/@signUpFormSection/sign-up-form';
import { UserDTO } from '@/fe/types/auth';
import { useEffect, useState } from 'react';
import { fetcher } from '@/fe/utils/server/fetcher';
import { Maybe } from '@/fe/utils/aliases.types';
import { ForgotPasswordFormFields } from '@/fe/app/forgot-password/page';
import { SetPasswordFormFields } from '@/fe/app/set-password/[token]/page';

type SetPasswordMutation = {
  token: string;
  password: string;
};

/**
 * Performs a sign up request to the server.
 * If the request is successful, then shows a success toast message.
 * If the request fails, then shows an error toast message.
 * @param input The input data for the sign up request.
 * @returns A function which performs the sign up request.
 */
export const useSignUp = (input: SignUpFormFields) => {
  const { mutateAsync: signUp } = useMutation({
    mutationFn: () => poster<SignUpFormFields>('/auth/register', input, true),
    onSuccess: (data) => {
      if (data.message) {
        authErrorTranslator(
          'sign-up',
          data.message,
          'Unexpected error at signing up...'
        );
        return null;
      }

      toast.success('You have successfully registered!', {
        id: 'sign-up',
      });
    },
    onError: (error) => {
      console.error(error.message);
      toast.error('Unexpected error at signing up...', {
        id: 'sign-up',
      });
    },
  });

  return signUp;
};

/**
 * Performs a forgot password request to the server.
 * If the request is successful, then shows a success toast message.
 * If the request fails, then shows an error toast message.
 * @param input The input data for the forgot password request.
 * @returns A function which performs the forgot password request.
 */
export const useForgotPassword = (input: ForgotPasswordFormFields) => {
  const { mutateAsync: forgotPassword } = useMutation({
    mutationFn: () =>
      poster<ForgotPasswordFormFields>(
        '/auth/request-password-modify',
        input,
        true
      ),
    onSuccess: (data) => {
      if (data.message) {
        authErrorTranslator(
          'forgot-password',
          data.message,
          'Unexpected error at sending forgot password mail...'
        );
        return null;
      }

      toast.success('Your reset password mail has been sent!', {
        id: 'forgot-password',
      });
    },
    onError: (error) => {
      console.error(error.message);
      toast.error('Unexpected error at sending forgot password mail...', {
        id: 'forgot-password',
      });
    },
  });

  return forgotPassword;
};

export const useSetPassword = (token: string, input: SetPasswordFormFields) => {
  const { mutateAsync: setPassword } = useMutation({
    mutationFn: () =>
      poster<SetPasswordMutation>(
        '/auth/set-password',
        { token, password: input.password },
        true
      ),
    onSuccess: (data) => {
      if (data.message) {
        authErrorTranslator(
          'set-password',
          data.message,
          'Unexpected error at setting password...'
        );
        return null;
      }

      toast.success('Your password has been set!', {
        id: 'set-password',
      });
    },
    onError: (error) => {
      console.error(error.message);
      toast.error('Unexpected error at setting password...', {
        id: 'set-password',
      });
    },
  });

  return setPassword;
};

/**
 * Performs a request to the server to find the current user.
 * If the request is successful, then shows a success toast message.
 * If the request fails, then shows an error toast message.
 * If the request is loading, then shows a loading toast message.
 * @returns The current user data.
 */
export const useFindCurrentUser = (): Maybe<UserDTO> => {
  const [user, setUser] = useState<Maybe<UserDTO>>(null);

  const { data, error, isLoading } = useQuery({
    queryFn: () => fetcher('/auth'),
    queryKey: ['findCurrentUser'],
  });

  useEffect(() => {
    if (error) {
      toast.error(error.message);
    }

    if (isLoading) {
      toast.loading('The current user data is loading...', {
        id: 'findCurrentUser',
      });
    }

    if (data) {
      toast.success('The current user data is loaded...', {
        id: 'findCurrentUser',
      });
      setUser(data);
    }
  }, [data, error, isLoading]);

  return user;
};
