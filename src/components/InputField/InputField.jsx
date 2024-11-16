import { useState } from "react";

import { Icon } from "../../components";

export const InputField = ({
  wrapperClass = "",
  label,
  name,
  type = "text",
  placeholder,
  defaultValue,
  register,
  errors,
  autoComplete = "off",
  password = "false",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputProps = {
    className: "field",
    type,
    placeholder,
    defaultValue,
    ...register(name),
    autoComplete,
  };

  const errorMessage = errors[name]?.message;

  const handleChangePasswordView = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={wrapperClass}>
      <label className="label relative">
        {label}
        <input
          {...inputProps}
          {...(type === "password" && {
            type: showPassword ? "text" : "password",
          })}
        />
        {password === "true" && (
          <span
            onClick={handleChangePasswordView}
            className="absolute right-5 top-[46px] cursor-pointer"
          >
            <Icon name={showPassword ? "eye" : "eye-off"} size={20} className="stroke-black" />
          </span>
        )}
      </label>
      {errorMessage && <p className="field-error">{errorMessage}</p>}
    </div>
  );
};
