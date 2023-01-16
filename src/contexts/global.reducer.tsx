type State = {
  modal: boolean;
  theme: string;
  IsLightMode: boolean;
  SearchState: boolean;
};

type Action = {
  type: "one" | "two" | "LIGHT" | "DARK" | "SEARCHING" | "SEARCHED";
};

export const GlobalReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "one":
      return { ...state, modal: true };
    case "two":
      return { ...state, modal: false };
    case "LIGHT":
      return { ...state, IsLightMode: true };
    case "DARK":
      return { ...state, IsLightMode: false };
    case "SEARCHING":
      return { ...state, SearchState: true };
    case "SEARCHED":
      return { ...state, SearchState: false };
    // case "DARK":
    //   return { ...state, theme: "dark" };

    default:
      return state;
  }
};
