'use client';

import Image from 'next/legacy/image';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TitleAtom from '@/fe/components/atoms/title.atom';
import InputAtom from '@/fe/components/atoms/form/input.atom';
import { ButtonAtom } from '@/fe/components/atoms/button/button.atom';
import { setPasswordTokens, workerTokens } from '@/fe/tokens';
import { setPasswordMutation } from '@/fe/server/mutations/auth/set-password.mutation';

import logo from '../../../../public/img/RentNDeal.png';
import { ColumnAtom } from '@/fe/components/atoms/layout/column.atom';

export type FormState = {
  password: string;
  confirmPassword: string;
};

const initialState: FormState = {
  password: '',
  confirmPassword: '',
};

const ModifyPasswordPage = ({ params }: { params: { token: string } }) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isLoading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const onSetPassword = async () => {
    setLoading(true);
    const toastId = toast.loading(workerTokens.create_loading);

    if (formState.password !== formState.confirmPassword) {
      toast.error(setPasswordTokens.not_match, { id: toastId });
      setLoading(false);
      return;
    }

    setPasswordMutation(params.token, formState.password)
      .then((res) => {
        if (res.error) {
          toast.error(res.error, { id: toastId });
          return null;
        }
        if (res.unexpected) {
          console.error(res.unexpected);
          toast.error(setPasswordTokens.unexpected_error, {
            id: toastId,
          });
          return null;
        }
        toast.success(res.success ?? '', { id: toastId });
        router.push('/');
      })
      .finally(() => setLoading(false));
  };

  const onChangePassword = (value: string) => {
    setFormState((prev) => ({ ...prev, password: value }));
  };

  const onChangeConfirmPassword = (value: string) => {
    setFormState((prev) => ({ ...prev, confirmPassword: value }));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center portrait:p-[8.89vh] p-[5.00vw]">
      <ColumnAtom style={'items-center'}>
        <div className="relative w-[43.75vw] h-[19.11vw]">
          <Image alt="set-password-logo" src={logo} className="" layout="fill" />
        </div>
        <TitleAtom
          style={' uppercase font-[900]  tracking-wider'}
          text={setPasswordTokens.title}
        />
      </ColumnAtom>
      
        
      <div className="portrait:w-[40vh] w-[26.04vw] flex flex-col portrait:gap-base gap-base-landscape portrait:my-large my-large-landscape portrait:text-base text-base-landscape">
        <InputAtom
          id="password"
          placeholder={setPasswordTokens.password}
          type="password"
          value={formState.password}
          onChange={onChangePassword}
        />
        <InputAtom
          id="confirmPassword"
          placeholder={setPasswordTokens.confirm_password}
          type="password"
          value={formState.confirmPassword}
          onChange={onChangeConfirmPassword}
        />
        {!isLoading && (
          <ButtonAtom
            onClick={onSetPassword}
            inset='base'
            size='base'            
            style="border-base-secondary text-base-secondary hover:bg-base-secondary hover:text-base-accent"
            disabled={isLoading}
          >
            {setPasswordTokens.submit_button}
          </ButtonAtom>
        )}
      </div>
    </main>
  );
};

export default ModifyPasswordPage;
