'use client';

import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInputAtom from '@/fe/components/atoms/form/text-input.atom';
import ErrorMessageAtom from '@/fe/components/atoms/form/error-message.atom';
import { SubmitButtonAtom } from '@/fe/components/atoms/form/submit-button.atom';
import TextAtom from '@/fe/components/atoms/text.atom';
import LabeledInputMolecule from '@/fe/components/molecules/labeled-input.molecule';

export type LoginFormFields = { email: string; password: string };

const schema: z.Schema<LoginFormFields> = z.object({
  email: z.string().email(),
  password: z.string(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormFields>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormFields> = async (data) => {
    try {
      await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })
        .then((res) => {
          if (!res?.ok) {
            toast.error(res?.error ?? 'Error at login!');
            return;
          }
          toast.success('Login success!');
          router.push('/');
        })
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="portrait:w-full w-[26.04vw] flex flex-col portrait:gap-sm gap-sml mx-auto"
    >
      <LabeledInputMolecule label={'Email'}>
        <TextInputAtom
          placeholder={'john.doe@example.com'}
          inset="xxs"
          type="text"
          register={register('email')}
        />
        <ErrorMessageAtom message={errors.email?.message} />
      </LabeledInputMolecule>
      <LabeledInputMolecule label={'Password'}>
        <TextInputAtom
          placeholder={'**********'}
          inset="xxs"
          type="password"
          register={register('password')}
        />
        <ErrorMessageAtom message={errors.password?.message} />
      </LabeledInputMolecule>
      <SubmitButtonAtom
        text={'Login'}
        inset="xxs"
        isPending={isSubmitting}
        pendingText={'Login loading...'}
      />
      <Link href={'/forgot-password'}>
        <TextAtom
          className="underline text-dominant !font-[500]"
          text={'Forgot Password'}
        />
      </Link>
      <Link href={'/auth/sign-up'}>
        <TextAtom
          className="underline text-dominant !font-[500]"
          text={'New User? Sign Up'}
        />
      </Link>
    </form>
  );
};

export default LoginForm;
