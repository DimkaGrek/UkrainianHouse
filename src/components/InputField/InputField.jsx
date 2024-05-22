export const InputField = ({
  label,
  name,
  type = 'text',
  placeholder,
  register,
}) => {
  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <label className="label">
      {label}
      <input
        className="field"
        type={type}
        placeholder={placeholder}
        {...register(name)}
        defaultValue={type === 'date' ? currentDate : undefined}
        max={type === 'date' ? currentDate : undefined}
        required
      />
    </label>
  );
};
