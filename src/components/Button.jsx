const Button = ({ text, primary }) => {
  return (
    <button
      type={`submit`}
      className={`${primary ? "bg-[#03295A] text-white" : "bg-white text-gray-500"} rounded-lg font-semibold  p-3 w-[8rem]`}
    >
      {text}
    </button>
  )
}

export default Button;
