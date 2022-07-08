import React from "react";
import GlobalContext from "./globalContext";
import SlidingUpPanelComponent from "./components/SlidingUpPanelComponent";

import * as Font from "expo-font";

Font.loadAsync({
  THICCCBOI_ExtraBold: require("../assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("../assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("../assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("../assets/fonts/THICCCBOI-Regular.ttf"),
});

const MainApp = () => {
  return (
    <GlobalContext>
      <SlidingUpPanelComponent />
    </GlobalContext>
  );
};

export default MainApp;
