import { FormContext } from "@/pages/_app";
import { useContext } from "react";

const SideBarMenu = ({ step, text }) => {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div
      onClick={() => dispatch({ type: "SET_ACTIVE_STEP", payload: step })}
      className={`cursor-pointer flex flex-row items-center gap-4`}
    >
      <div
        className={`p-2 ${
          state.activeStep == step
            ? "bg-[#BDE0FE] text-black"
            : "border border-white text-white"
        }  rounded-full h-8 w-8 items-center justify-center flex`}
      >
        <span className="text-center font-semibold">{step}</span>
      </div>
      <div className="text-white">
        <p className="text-sm text-white/70">{`STEP ${step}`}</p>
        <p className="font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default SideBarMenu;
