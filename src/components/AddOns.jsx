import { useContext } from "react";
import { AddOnCard, Button, StepHeading } from "./"
import { FormContext } from "@/pages/_app";

const AddOns = () => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <StepHeading
        title="Pick add-ons"
        description="Add-ons help you enhance your gaming experience."
      />
      <div className="flex flex-col gap-4 w-full">
        {state.addOns.map((addOn) => {
          return (
            <div key={addOn.name}>
              <AddOnCard
                addOn={addOn}
              />
            </div>
          )
        })}
      </div>    
      <div className="flex flex-row justify-between mt-auto w-full">
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
  )
}

export default AddOns;
