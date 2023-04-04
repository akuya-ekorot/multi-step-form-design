const Input = ({ label, placeholder, type, name }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="" htmlFor={name}>{label}</label>
      <input
        className="border border-gray rounded p-3 placeholder:font-semibold"
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
