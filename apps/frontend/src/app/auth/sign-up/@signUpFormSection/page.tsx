import SignUpForm from '@/fe/app/auth/sign-up/@signUpFormSection/sign-up-form';

export default async function SignUpFormSection() {
  return (
    <section id="sign-up-form-section" className="portrait:p-sm p-sml">
      <SignUpForm />
    </section>
  );
}
