import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import { InputField } from '../InputField/InputField';

import { loginFormShema } from '../../schemas';
import { loginThunk } from '../../my-redux';
import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(loginFormShema),
  });

  const onSubmit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .catch(e => {
        if (e.slice(-3) === '401') {
          toast.error('Wrong email or password.');
        } else {
          toast.error('Something went wrong. Please, reload the page.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <h2 className="font-proza-medium text-[26px] leading-[34px]">Login</h2>
      <InputField
        label="Email"
        name="username"
        type="email"
        placeholder="Enter your email adress"
        register={register}
        errors={errors}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your password"
        register={register}
        errors={errors}
        password="true"
      />
      <Link
        to="/auth/forgot"
        className="text-sm leading-[18px] text-my-blue hover:underline"
      >
        Forgot password?
      </Link>
      {/* <label className="flex items-center gap-3 text-sm leading-[18px] text-[#666666] cursor-pointer">
        <input
          type="checkbox"
          className="w-5 h-5 cursor-pointer"
          {...register('remember')}
        />
        Remember me
      </label> */}
      <button className="primaryBtn w-full h-[56px]" type="submit">
        Login
      </button>
    </form>
  );
};
