'use client';

import TitleAtom from '@/fe/components/atoms/title.atom';
import TextInputAtom from '@/fe/components/atoms/form/text-input.atom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessageAtom from '@/fe/components/atoms/form/error-message.atom';
import { RowAtom } from '@/fe/components/atoms/layout/row.atom';
import LabeledInputMolecule from '@/fe/components/molecules/labeled-input.molecule';
import { SubmitButtonAtom } from '@/fe/components/atoms/form/submit-button.atom';
import { useRouter } from 'next/navigation';
import { useForgotPassword } from '@/fe/data-access/auth';

export type ForgotPasswordFormFields = {
  email: string;
};

const schema: z.Schema<ForgotPasswordFormFields> = z.object({
  email: z.string().email(),
});

export default function ForgotPasswordPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isLoading },
  } = useForm<ForgotPasswordFormFields>({
    resolver: zodResolver(schema),
  });

  const onForgotPassword = useForgotPassword(getValues());

  const onSubmit: SubmitHandler<ForgotPasswordFormFields> = async (data) => {
    try {
      onForgotPassword();
      router.push('/auth/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center portrait:p-[8.89vh] p-[5.00vw]">
      <RowAtom spacing="xl" spacingDirection="vertical">
        <TitleAtom center size="xl" title="LogoBigHere" />
      </RowAtom>
      <TitleAtom title={'Forgot Password'} />
      {!isLoading && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="portrait:w-[40vh] w-[26.04vw] flex flex-col portrait:gap-base gap-basel portrait:my-lg my-lgl"
        >
          <LabeledInputMolecule label={'Email'}>
            <TextInputAtom
              placeholder={'john.doe@example.com'}
              inset="xxs"
              type="email"
              register={register('email')}
            />
            {errors.email && (
              <ErrorMessageAtom message={errors.email.message} />
            )}
          </LabeledInputMolecule>
          <SubmitButtonAtom
            pendingText="Sending"
            text="Send"
            size="base"
            inset="xxs"
          />
        </form>
      )}
    </main>
  );
}
