import { FormContext } from "@/pages/_app";
import Image from "next/image";
import { useContext } from "react";

const PlanCard = ({ plan }) => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div
      onClick={
        () => dispatch({
          type: "SET_PLAN",
          payload: {
            name: plan.name,
            price: plan.price,
            frequency: state.frequency === "Monthly" ? "Monthly" : "Yearly"
          }
        })
      }
      className={`${
        ((plan.name === state.activePlan?.name)
          && (state.frequency === state.activePlan?.frequency))
          ? "border-black"
          : ""
        } flex flex-col justify-between rounded-lg border h-full max-h-[10rem] w-full max-w-[8.5rem] p-4`}
    >
      <Image src={plan.icon} width={`40`} height={`40`} alt={``} />
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{plan.name}</p>
        <p className="text-sm text-gray-500">{`$${plan.price}/${state.frequency === "Monthly" ? "mo" : "yr"}`}</p>
      </div>
    </div>
  )
}

export default PlanCard;
