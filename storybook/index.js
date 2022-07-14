import { registerRootComponent } from "expo";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import "./rn-addons";

addDecorator(withKnobs);
configure(async () => require("./stories"), module);
registerRootComponent(getStorybookUI({ asyncStorage: null }));
