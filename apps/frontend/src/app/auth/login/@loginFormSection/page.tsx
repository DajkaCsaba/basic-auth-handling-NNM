'use server';
import { authOptions } from '@/fe/auth';
import { getServerSession } from 'next-auth';
import LoginForm from '@/fe/app/auth/login/@loginFormSection/login-form';

export default async function LoginFormSection() {
  const session = await getServerSession(authOptions);

  if (session) {
    return null;
  }

  return (
    <section id="login-form-section">
      <LoginForm />
    </section>
  );
}
