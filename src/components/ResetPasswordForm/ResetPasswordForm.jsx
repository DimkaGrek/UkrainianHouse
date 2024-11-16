import { useForm } from "react-hook-form";
import { InputField } from "../InputField/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

import { resetPaswordShema } from "../../schemas";

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(resetPaswordShema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <div className="font-proza-medium flex gap-3 text-[26px] leading-[34px]">
        <Link to="/auth/login" className="text-[#666666]">
          Login
        </Link>
        <p>Reset password</p>
      </div>
      <InputField
        label="Code"
        name="code"
        placeholder="Enter your code"
        register={register}
        errors={errors}
      />
      <InputField
        label="Password"
        name="password"
        type="password"
        placeholder="Enter your new password"
        register={register}
        errors={errors}
        password="true"
      />
      <button className="primaryBtn mt-1 h-[56px] w-full" type="submit">
        Reset password
      </button>
    </form>
  );
};
