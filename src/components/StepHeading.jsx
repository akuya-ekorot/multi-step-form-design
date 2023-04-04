const StepHeading = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="text-gray-500">
        {description}
      </p>
    </div>
  )
}

export default StepHeading;
