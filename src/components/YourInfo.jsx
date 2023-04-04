import { Button, Input, StepHeading } from "./"

const YourInfo = () => {
  return (
    <>
      <StepHeading
        title="Personal Info"
        description={"Please provide your name, email address and phone number."}
      />
      <form className="flex flex-col gap-4 h-full w-full">
        <Input label={`Name`} placeholder={`e.g. Stephen King`} type={`text`} name={`name`} />
        <Input label={`Email Address`} placeholder={`e.g. stephenking@lorem.com`} type={`email`} name={`email`} />
        <Input label={`Phone Number`} placeholder={`e.g. +1 234 567 890`} type={`text`} name={`phone`} />
        <div className="self-end mt-auto">
          <Button
            text="Next Step"
            primary
          />
        </div>
      </form>
    </>
  )
}

export default YourInfo;
