import { useForm } from 'react-hook-form';
import { InputField } from '../InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import { forgotPasswordSchema } from '../../schemas';

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="flex gap-3 font-proza-medium text-[26px] leading-[34px]">
        <Link to="/auth/login" className="text-[#666666]">
          Login
        </Link>
        <p>Forgot password</p>
      </div>
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email adress"
        register={register}
        errors={errors}
      />
      <button className="primaryBtn w-full h-[56px] mt-1" type="submit">
        Reset password
      </button>
    </form>
  );
};
