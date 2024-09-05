'use client';

import Image from 'next/legacy/image';
import { ButtonAtom } from '@/fe/components/atoms/button/button.atom';
import TitleAtom from '@/fe/components/atoms/title.atom';
import logo from '../../../public/img/RentNDeal.png';
import { useForgotPasswordHook } from '@/fe/app/forgot-password/forgot-password.hook';
import TextInputAtom from '@/fe/components/atoms/form/text-input.atom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ErrorMessageAtom from '@/fe/components/atoms/form/error-message.atom';
import { RowAtom } from '@/fe/components/atoms/layout/row.atom';

const schema = z.object({
  email: z.string().email(),
});

type FormFields = z.infer<typeof schema>;

const ForgotPasswordPage = () => {
  const { onRequest, isLoading } = useForgotPasswordHook();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center portrait:p-[8.89vh] p-[5.00vw]">
      <RowAtom spacing="xl" spacingDirection="vertical">
        <TitleAtom centered size="xl" title="LogoBigHere" />
      </RowAtom>
      <TitleAtom title={'Forgot Password'} />
      {!isLoading && (
        <form
          onSubmit={handleSubmit(onRequest)}
          className="portrait:w-[40vh] w-[26.04vw] flex flex-col portrait:gap-base gap-base-landscape portrait:my-large my-large-landscape portrait:text-base text-base-landscape"
        >
          <TextInputAtom
            placeholder={'Email'}
            type="email"
            register={register('email')}
          />
          {errors.email && <ErrorMessageAtom message={errors.email.message} />}
          <ButtonAtom
            onClick={onRequest}
            style="portrait:p-radial-lg !p-radial-lg-landscape portrait:text-base text-basel"
            disabled={isLoading}
          >
            {'Send'}
          </ButtonAtom>
        </form>
      )}
    </main>
  );
};

export default ForgotPasswordPage;
