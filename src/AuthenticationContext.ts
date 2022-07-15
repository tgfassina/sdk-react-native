import { createContext } from "react";
import { ScreenTitle, SonrUserData } from "../types";

type AuthenticationContext = {
  onSuccess: (userData: SonrUserData) => void;
  close: () => void;
  navigate: (screen: ScreenTitle, props: any) => void;
};
export const AuthenticationContext = createContext<AuthenticationContext>({
  onSuccess: () => {},
  close: () => {},
  navigate: () => {},
});
