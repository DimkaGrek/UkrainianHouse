import { useForm } from 'react-hook-form';
import { InputField } from '../InputField/InputField';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import { loginFormShema } from '../../schemas';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(loginFormShema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <h2 className="font-proza-medium text-[26px] leading-[34px]">Login</h2>
      <InputField
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email adress"
        register={register}
        errors={errors}
      />
      <InputField
        label="Password"
        name="password"
        type="text"
        placeholder="Enter your password"
        register={register}
        errors={errors}
      />
      <Link
        to="/auth/forgot"
        className="text-sm leading-[18px] text-my-blue hover:underline"
      >
        Forgot password?
      </Link>
      <label className="flex items-center gap-3">
        <input type="checkbox" className="w-5 h-5" {...register('remember')} />
        <span className="text-sm leading-[18px] text-[#666666]">
          Remember me
        </span>
      </label>
      <button className="primaryBtn w-full h-[56px]" type="submit">
        Login
      </button>
    </form>
  );
};
