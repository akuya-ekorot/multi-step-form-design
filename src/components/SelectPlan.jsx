import { Button, PlanCard, StepHeading } from "./"

const SelectPlan = () => {
  return (
    <>
      <StepHeading
        title="Select Plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className="h-[10rem] flex flex-row w-full justify-between">
        <PlanCard
          src="/icon-arcade.svg"
          plan={`Arcade`}
          price={9}
        />
        <PlanCard
          src="/icon-advanced.svg"
          plan={`Advanced`}
          price={9}
        />
        <PlanCard
          src="/icon-pro.svg"
          plan={`Pro`}
          price={9}
        />
      </div>
      <div className="w-full bg-[#F8F9FE] py-3 flex flex-row justify-center rounded">
        <div className="flex gap-4 font-semibold text-sm">
          <span>Monthly</span>
          <div className="p-1 flex flex-row w-10 justify-start items-center rounded-full bg-[#03285C]">
            <div className="rounded-full h-3 w-3 bg-white"></div>
          </div>
          <span>Yearly</span>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between mt-auto">
        <Button
          text="Go Back"
        />
        <Button
          text="Next Step"
          primary
        />
      </div>
    </>
  );
}

export default SelectPlan;
