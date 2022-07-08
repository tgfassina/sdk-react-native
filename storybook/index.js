import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import "./rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);

configure(async () => require("./stories"), module);

const StorybookUIRoot = getStorybookUI({ asyncStorage: null });

export default StorybookUIRoot;
