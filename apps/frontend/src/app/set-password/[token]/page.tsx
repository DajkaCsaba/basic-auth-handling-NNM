'use client';

import { useRouter } from 'next/navigation';
import TitleAtom from '@/fe/components/atoms/title.atom';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';
import PasswordInputAtom from '@/fe/components/atoms/form/password-input.atom';
import { SubmitButtonAtom } from '@/fe/components/atoms/form/submit-button.atom';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import LabeledInputMolecule from '@/fe/components/molecules/labeled-input.molecule';
import ErrorMessageAtom from '@/fe/components/atoms/form/error-message.atom';
import { useSetPassword } from '@/fe/data-access/auth';
import toast from 'react-hot-toast';

export type SetPasswordFormFields = {
  password: string;
  confirmPassword: string;
};

const schema: z.Schema<SetPasswordFormFields> = z.object({
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export default function ModifyPasswordPage({
  params,
}: {
  params: { token: string };
}) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isLoading },
  } = useForm<SetPasswordFormFields>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();

  const onSetPassword = useSetPassword(params.token, getValues());

  const onSubmit: SubmitHandler<SetPasswordFormFields> = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error('Passwords do not match');
      return null;
    }
    try {
      onSetPassword();
      router.push('/auth/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center portrait:p-[8.89vh] p-[5.00vw]">
      <ColumnAtom className={'items-center'}>
        <TitleAtom
          className={'font-[900]  tracking-wider'}
          size="xl"
          title={'LogoBigHere'}
        />
        <TitleAtom
          className={' uppercase font-[900]  tracking-wider'}
          title={'Set Password'}
        />
      </ColumnAtom>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="portrait:w-[40vh] w-[26.04vw] flex flex-col portrait:gap-base gap-basel portrait:my-lg my-lgl"
      >
        <LabeledInputMolecule label="Password">
          <PasswordInputAtom
            register={register('password')}
            inset="xxs"
            placeholder={'***********'}
          />
          <ErrorMessageAtom message={errors.password?.message} />
        </LabeledInputMolecule>
        <LabeledInputMolecule label="Confirm Password">
          <PasswordInputAtom
            register={register('confirmPassword')}
            inset="xxs"
            placeholder={'***********'}
          />
          <ErrorMessageAtom message={errors.confirmPassword?.message} />
        </LabeledInputMolecule>
        {!isLoading && (
          <SubmitButtonAtom
            inset="xxs"
            pendingText="Set password loading..."
            text="Set password"
          />
        )}
      </form>
    </main>
  );
}
