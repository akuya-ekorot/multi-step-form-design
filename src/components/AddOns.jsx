import { AddOnCard, Button, StepHeading } from "./"

const AddOns = () => {
  return (
    <>
      <StepHeading
        title="Pick add-ons"
        description="Add-ons help you enhance your gaming experience."
      />
      <div className="flex flex-col gap-4 w-full">
        <AddOnCard
          name="Online service"
          description="Access to multiplayer games"
        />
        <AddOnCard
          name="Online service"
          description="Access to multiplayer games"
        />
        <AddOnCard
          name="Online service"
          description="Access to multiplayer games"
        />
      </div>    
      <div className="flex flex-row justify-between mt-auto w-full">
        <Button
          text="Go Back"
        />
        <Button
          text="Next Step"
          primary
        />
      </div>
    </>
  )
}

export default AddOns;
