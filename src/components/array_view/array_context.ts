import { Dispatch, createContext } from "react";
import { ArrayActions, ArrayState } from "./array_view.reducer";

export const ArrayContext = createContext<ArrayState | null>(null);
export const ArrayDispatchContext =
  createContext<Dispatch<ArrayActions> | null>(null);
