// import { registerRootComponent } from "expo";
// import AuthenticationComponent from "./src/AuthenticationComponent";
// registerRootComponent(AuthenticationComponent);

import { registerRootComponent } from "expo";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import "./storybook/rn-addons";

console.log("hellow22");

addDecorator(withKnobs);
configure(async () => require("./storybook/stories"), module);
registerRootComponent(getStorybookUI({ asyncStorage: null }));

// include fonts?
import AuthenticationComponent from "./src/AuthenticationComponent";
export { AuthenticationComponent };
