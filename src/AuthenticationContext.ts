import { createContext } from "react";
export const AuthenticationContext = createContext({
  onSuccess: ({}) => {},
  close: () => {},
  navigate: (_) => {},
});
