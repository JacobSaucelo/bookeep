import React, { useReducer, useMemo } from "react";
import { GlobalReducer } from "./global.reducer";
import { AppContext, GlobalInitialState } from "./global.state";

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(GlobalReducer, GlobalInitialState);

  const opValue = useMemo(
    () => ({
      ...state,
      On: () => dispatch({ type: "one" }),
      Off: () => dispatch({ type: "two" }),
      LightMode: () => dispatch({ type: "LIGHT" }),
      DarkMode: () => dispatch({ type: "DARK" }),
      Searching: () => dispatch({ type: "SEARCHING" }),
      Searched: () => dispatch({ type: "SEARCHED" }),
      // LightMode: () => dispatch({ type: "LIGHT" }),
    }),
    [state, dispatch]
  );

  return <AppContext.Provider value={opValue}>{children}</AppContext.Provider>;
};
