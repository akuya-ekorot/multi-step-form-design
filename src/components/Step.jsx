import { FormContext } from "@/pages/_app";
import { useContext } from "react";
import { AddOns, Summary, YourInfo, SelectPlan } from "./"

const Step = () => {
  const { state } = useContext(FormContext);

  const steps = {
    1: <YourInfo />,
    2: <SelectPlan />,
    3: <AddOns />,
    4: <Summary />
  }

  return steps[state.activeStep];
}

export default Step;
