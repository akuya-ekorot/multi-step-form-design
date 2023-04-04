import { Button, StepHeading } from "./"

const Summary = () => {
  return (
    <>
      <StepHeading
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className="w-full rounded-lg bg-[#F8F9FE] flex flex-col gap-6 p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Arcade (Monthly)</p>
            <p className="underline text-sm">Change</p>
          </div>
          <p className="font-semibold">$9/mo</p>
        </div>
        <div className="h-[1px] border"></div>
        <div className="flex flex-row items-center justify-between text-gray-500">
          <p>Online Storage</p>
          <p>+$1/mo</p>
        </div>
        <div className="flex flex-row items-center justify-between text-gray-500">
          <p>Online Storage</p>
          <p>+$1/mo</p>
        </div>
      </div>
      <div className="w-full p-4 flex flex-row items-center justify-between">
        <p className="text-gray-500">Total (per month)</p>
        <p className="text-xl font-semibold">+$1/mo</p>
      </div>
      <div className="w-full flex flex-row justify-between mt-auto">
        <Button
          text="Go Back"
        />
        <Button
          text="Confirm"
          primary
        />
      </div>
    </>
  )
}

export default Summary;
