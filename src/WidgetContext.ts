import { createContext } from "react";
export const WidgetContext = createContext({
  onSuccess: () => {},
  close: () => {},
  navigate: (_) => {},
});
