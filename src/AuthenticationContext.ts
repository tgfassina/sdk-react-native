import { createContext } from "react";
export const AuthenticationContext = createContext({
  onSuccess: ({}) => {},
  close: () => {},
  navigate: (_, {}) => {},
  createAccount: ({}) => {},
});
