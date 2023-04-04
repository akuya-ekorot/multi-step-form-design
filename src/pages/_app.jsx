import "@/styles/globals.css";
import { useReducer, createContext } from "react";

const FormContext = createContext();
export { FormContext };

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(
    (state, { type, payload }) => {
      switch (type) {
        default:
          throw new Error("Case not handled");
        case "SET_ADDON":
          const contains = (activeList, payload) => {
            let i = activeList.length;
            while (i--) {
              if (activeList[i] === payload) {
                return activeList.filter((v) => v !== payload);
              }
            }
            return [...activeList, payload]
          }
          return {
            ...state,
            activeAddOns: contains(state.activeAddOns, payload),
            total: state.activePlan.price + contains(state.activeAddOns, payload).reduce((pv, cv) => (pv + cv.price), 0)
          }
        case "SET_ORDER":
          return {...state, order: payload, activeStep: state.activeStep + 1}
        case "SET_PLAN":
          return { ...state, activePlan: payload, total: payload.price}
        case "SET_INFO":
          return { ...state, personalInfo: payload, activeStep: state.activeStep + 1}
        case "SET_ACTIVE_STEP":
          return { ...state, activeStep: payload };
        case "TOGGLE_FREQUENCY":
          return {
            ...state,
            frequency: state.frequency === "Yearly" ? "Monthly" : "Yearly",
            activePlan: {
              ...state.activePlan,
              price: state.frequency === "Monthly" ? state.activePlan.price * 10 : state.activePlan.price / 10,
              frequency: state.frequency === "Monthly" ? "Yearly" : "Monthly"
            },
            plans: state.plans.map((plan) => {
              return {
                ...plan,
                price: state.frequency === "Monthly" ? plan.price * 10 : plan.price / 10,
              }
            }),
            addOns: state.addOns.map((addOn) => {
              return {
                ...addOn,
                price: state.frequency === "Monthly" ? addOn.price * 10 : addOn.price / 10,
              }
            }),
            activeAddOns: []
          }
      }
    },
    {
      frequency: "Monthly",
      order: {},
      total: 0,
      activeStep: 1,
      activePlan: {},
      activeAddOns: [],
      plans: [
        {name: "Arcade", price: 9, icon: "/icon-arcade.svg"},
        {name: "Advanced", price: 12, icon: "/icon-advanced.svg"},
        {name: "Pro", price: 15, icon: "/icon-pro.svg"},
      ],
      addOns: [
        {name: "Online service", description: "Access to multiplayer games", price: 1},
        {name: "Larger storage", description: "Extra 1TB of cloud save", price: 2},
        {name: "Customizable Profile", description: "Custom theme on your profile", price: 2},
      ],
      personalInfo: {name: "", email: "", phone: ""},
    }
  );

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
