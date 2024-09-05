'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextInputAtom from '@/fe/components/atoms/form/text-input.atom';
import ErrorMessageAtom from '@/fe/components/atoms/form/error-message.atom';
import { SubmitButtonAtom } from '@/fe/components/atoms/form/submit-button.atom';
import LabeledInputMolecule from '@/fe/components/molecules/labeled-input.molecule';
import TextAtom from '@/fe/components/atoms/text.atom';
import { useSignUp } from '@/fe/data-access/auth';
import { FormGroupAtom } from '@/fe/components/atoms/form/form-group.atom';
import PasswordInputAtom from '@/fe/components/atoms/form/password-input.atom';

export type SignUpFormFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const schema: z.Schema<SignUpFormFields> = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormFields>({
    resolver: zodResolver(schema),
  });

  const onSignUp = useSignUp(getValues());
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpFormFields> = async (data) => {
    try {
      onSignUp();
      router.push('/auth/login');
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
      <FormGroupAtom>
        <LabeledInputMolecule label={'First name'}>
          <TextInputAtom
            placeholder={'John'}
            inset="xxs"
            type="text"
            register={register('firstName')}
          />
          {errors.firstName && (
            <ErrorMessageAtom message={errors.firstName.message} />
          )}
        </LabeledInputMolecule>
        <LabeledInputMolecule label="Last name">
          <TextInputAtom
            placeholder={'Doe'}
            inset="xxs"
            type="text"
            register={register('lastName')}
          />
          {errors.lastName && (
            <ErrorMessageAtom message={errors.lastName.message} />
          )}
        </LabeledInputMolecule>
      </FormGroupAtom>
      <FormGroupAtom>
        <LabeledInputMolecule label={'Email'}>
          <TextInputAtom
            placeholder={'john.doe@example.com'}
            inset="xxs"
            type="text"
            register={register('email')}
          />
          {errors.email && <ErrorMessageAtom message={errors.email.message} />}
        </LabeledInputMolecule>
        <LabeledInputMolecule label={'Password'}>
          <PasswordInputAtom
            placeholder={'**********'}
            inset="xxs"
            register={register('password')}
          />
          {errors.password && (
            <ErrorMessageAtom message={errors.password.message} />
          )}
        </LabeledInputMolecule>
      </FormGroupAtom>
      <SubmitButtonAtom
        text={'Sign Up'}
        inset="xxs"
        isPending={isSubmitting}
        pendingText={'Sign up loading...'}
      />
      <Link href={'/auth/login'}>
        <TextAtom
          className="underline text-dominant !font-[500]"
          text={'Already have an account?'}
        />
      </Link>
    </form>
  );
}
