import "@/styles/globals.css";
import { useReducer, createContext } from "react";

const FormContext = createContext();
export { FormContext };

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_ACTIVE_STEP":
          return { ...state, activeStep: action.payload };
      }
    },
    {
      activeStep: 1,
    }
  );

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </FormContext.Provider>
  );
}
