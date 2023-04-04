import { useContext } from "react";
import { Button, StepHeading } from "./"
import { FormContext } from "@/pages/_app";

const Summary = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <StepHeading
        title="Finishing up"
        description="Double-check everything looks OK before confirming"
      />
      <div className="w-full rounded-lg bg-[#F8F9FE] flex flex-col gap-6 p-4">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">
              {`${state.activePlan.name} (${state.activePlan.frequency})`}
            </p>
            <p className="underline text-sm">Change</p>
          </div>
          <p className="font-semibold">{`$${state.activePlan.price}/${state.frequency === "Monthly" ? "mo" : "yr"}`}</p>
        </div>
        <div className="h-[1px] border"></div>
        {state.activeAddOns.map((activeAddOn) => {
          return (
            <div key={activeAddOn.name} className="flex flex-row items-center justify-between text-gray-500">
              <p>{activeAddOn.name}</p>
              <p>{`+$${activeAddOn.price}/${state.frequency === "Monthly" ? "mo" : "yr"}`}</p>
            </div>
          )
        })}
      </div>
      <div className="w-full p-4 flex flex-row items-center justify-between">
        <p className="text-gray-500">Total (per month)</p>
        <p className="text-xl font-semibold">{`$${state.total}/${state.frequency === "Monthly" ? "mo" : "yr"}`}</p>
      </div>
      <div className="w-full flex flex-row justify-between mt-auto">
        <div onClick={() => dispatch({ type: "SET_ACTIVE_STEP", payload: state.activeStep - 1})}>
          <Button
            text="Go Back"
          />
        </div>
        <div onClick={() => dispatch({ type: "SET_ORDER", payload: {customer: state.personalInfo, plan: state.activePlan, addOns: state.activeAddOns, total: state.total, frequency: state.frequency}})}>
          <Button
            text="Confirm"
            primary
          />
        </div>
      </div>
    </>
  )
}

export default Summary;
