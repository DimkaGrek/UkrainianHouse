import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { InputField } from "../../components";

import { forgotPasswordSchema } from "../../schemas";

export const ForgotPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(forgotPasswordSchema),
  });

  const onSubmit = () => {
    navigate("/auth/reset");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="font-proza-medium flex gap-3 text-[26px] leading-[34px]">
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
      <button className="primaryBtn mt-1 h-[56px] w-full" type="submit">
        Reset password
      </button>
    </form>
  );
};
