const Input = ({ label, placeholder, type, register, name }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        {...register(name)}
      />
    </div>
  );
};

export default Input;
