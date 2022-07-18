import { registerRootComponent } from "expo";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import "./storybook/rn-addons";

import AuthenticationComponent from "./src/AuthenticationComponent";

addDecorator(withKnobs);
configure(async () => require("./storybook/stories"), module);
registerRootComponent(getStorybookUI({ asyncStorage: null }));

export { AuthenticationComponent };
