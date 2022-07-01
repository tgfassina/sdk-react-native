import {
  getStorybookUI,
  configure,
  addDecorator,
} from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";

import * as Font from "expo-font";

import "./rn-addons";

// enables knobs for all stories
addDecorator(withKnobs);

Font.loadAsync({
  THICCCBOI_ExtraBold: require("../assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("../assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("../assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("../assets/fonts/THICCCBOI-Regular.ttf"),
}),
  configure(async () => {
    require("./stories");
  }, module);

const StorybookUIRoot = getStorybookUI({});


export default StorybookUIRoot;
