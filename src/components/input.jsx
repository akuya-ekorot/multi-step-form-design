const Input = ({ defaultValue, register, label, placeholder, type, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="" htmlFor={name}>{label}</label>
      <input
        className="border border-gray rounded p-3 placeholder:font-semibold"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
