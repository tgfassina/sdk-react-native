import { registerRootComponent } from "expo";
import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import "./storybook/rn-addons";

import * as Font from "expo-font";
Font.loadAsync({
  THICCCBOI_ExtraBold: require("./assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("./assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("./assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("./assets/fonts/THICCCBOI-Regular.ttf"),
});

addDecorator(withKnobs);
configure(async () => require("./storybook/stories"), module);
registerRootComponent(getStorybookUI({ asyncStorage: null }));
