import { FormContext } from "@/pages/_app";
import { useContext } from "react";
import { AddOns, Summary, ThankYou, YourInfo, SelectPlan } from "./"

const Step = () => {
  const { state } = useContext(FormContext);

  const steps = {
    1: <YourInfo />,
    2: <SelectPlan />,
    3: <AddOns />,
    4: <Summary />,
    5: <ThankYou />
  }

  return (
    <div className="pt-10 pb-2 w-full flex justify-center">
      <div className="flex flex-col gap-8 w-full max-w-md items-center">
        {steps[state.activeStep]}
      </div>
    </div>
  )
}

export default Step;
