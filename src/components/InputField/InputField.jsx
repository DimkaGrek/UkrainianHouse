export const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  defaultValue,
  register,
  errors,
  autoComplete = 'off',
}) => {
  const inputProps = {
    className: 'field',
    type,
    placeholder,
    defaultValue,
    ...register(name),
    autoComplete,
  };

  const errorMessage = errors[name]?.message;

  return (
    <div>
      <label className="label">
        {label}
        <input {...inputProps} />
      </label>
      {errorMessage && <p className="field-error">{errorMessage}</p>}
    </div>
  );
};
