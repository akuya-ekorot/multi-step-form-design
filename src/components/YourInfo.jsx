import { useContext } from "react";
import { Button, Input, StepHeading } from "./"
import { FormContext } from "@/pages/_app";
import { useForm } from "react-hook-form";

const YourInfo = () => {
  const { state, dispatch } = useContext(FormContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch({type: "SET_INFO", payload: data})
  }

  return (
    <>
      <StepHeading
        title="Personal Info"
        description={"Please provide your name, email address and phone number."}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 h-full w-full">
        <Input
          label={`Name`}
          placeholder={`e.g. Stephen King`}
          type={`text`}
          name={`name`}
          register={register}
          defaultValue={state.personalInfo.name}
        />
        <Input
          label={`Email Address`}
          placeholder={`e.g. stephenking@lorem.com`}
          type={`email`}
          name={`email`} 
          register={register}
          defaultValue={state.personalInfo.email}
        />
        <Input 
          label={`Phone Number`} 
          placeholder={`e.g. +1 234 567 890`} 
          type={`text`} 
          name={`phone`} 
          register={register}
          defaultValue={state.personalInfo.phone}
        />
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
