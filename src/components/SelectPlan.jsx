import { useContext } from "react";
import { Button, PlanCard, StepHeading } from "./"
import { FormContext } from "@/pages/_app";

const SelectPlan = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <StepHeading
        title="Select Plan"
        description="You have the option of monthly or yearly billing"
      />
      <div className="h-[10rem] flex flex-row w-full justify-between">
        {state.plans.map((plan) => {
          return (
            <PlanCard
              plan={plan}
            />
          )
        })}
      </div>
      <div className="w-full bg-[#F8F9FE] py-3 flex flex-row justify-center rounded">
        <div className="flex gap-4 font-semibold text-sm">
          <span className={state.frequency === "Monthly" ? "" : "text-gray-400"}>Monthly</span>
          <div
            onClick={
              () => dispatch({
                type: "TOGGLE_FREQUENCY",
                payload: state.frequency
              })
            }
            className={`${state.frequency === "Monthly" ? "justify-start" : "justify-end" } bg-[#03285C] p-1 flex flex-row w-10  items-center rounded-full `}
          >
            <div className="rounded-full h-3 w-3 bg-white"></div>
          </div>
          <span className={state.frequency === "Monthly" ? "text-gray-400" : ""}>Yearly</span>
        </div>
      </div>
      <div className="flex w-full flex-row justify-between mt-auto">
        <div onClick={() => dispatch({ type: "SET_ACTIVE_STEP", payload: state.activeStep - 1})}>
          <Button
            text="Go Back"
          />
        </div>
        <div onClick={() => dispatch({ type: "SET_ACTIVE_STEP", payload: state.activeStep + 1})}>
          <Button
            text="Next Step"
            primary
          />
        </div>
      </div>
    </>
  );
}

export default SelectPlan;
