import { FormContext } from "@/pages/_app";
import { useContext } from "react";

const AddOnCard = ({ addOn }) => {
  const { state, dispatch } = useContext(FormContext);

  const contains = (activeList, addOn) => {
    let i = activeList.length;
    while (i--) {
      if (activeList[i] === addOn) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      onClick={() => dispatch({
          type: "SET_ADDON",
          payload: addOn
        })
      }
      className={`${contains(state.activeAddOns, addOn) ? "border-black" : ""} rounded-lg p-4 border flex flex-row items-center gap-6`}
    >
      <input type="checkbox" />
      <div className="flex flex-col gap-1 grow">
        <p>{addOn.name}</p>
        <p>{addOn.description}</p>
      </div>
      <p>{`+$${addOn.price}/${state.frequency ? "mo" : "yr"}`}</p>
    </div>
  );
}

export default AddOnCard;
