import { createContext } from "react";

type GlobalTypes = {
  modal: boolean;
  theme: string;
  IsLightMode: boolean;
  SearchState: boolean;
  On: () => void;
  Off: () => void;
  LightMode: () => void;
  DarkMode: () => void;
  Searching: () => void;
  Searched: () => void;
};

export const GlobalInitialState = {
  modal: true,
  theme: "light",
  IsLightMode: true,
  SearchState: true,
  On: () => {},
  Off: () => {},
  LightMode: () => {},
  DarkMode: () => {},
  Searching: () => {},
  Searched: () => {},
};

export const AppContext = createContext<GlobalTypes>(GlobalInitialState);
