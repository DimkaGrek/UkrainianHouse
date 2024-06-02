export const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
  defaultValue,
}) => {
  return (
    <label className="label">
      {label}
      <input
        className="field"
        type={type}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={defaultValue}
        {...(type === 'number' ? { min: '0', defaultValue: '0' } : {})}
      />
    </label>
  );
};
