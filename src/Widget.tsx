import React, { useState } from "react";
import { AppContext } from "./context";
import SlidingUpPanelComponent from "./components/SlidingUpPanelComponent";
import ConnectWithVault from "./ConnectWithVault";
import SlidingUpRecognizedWelcome from "./PromptRecognized";
import * as Font from "expo-font";

Font.loadAsync({
  THICCCBOI_ExtraBold: require("../assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("../assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("../assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("../assets/fonts/THICCCBOI-Regular.ttf"),
});

const MainApp = () => {
  const [show, setShow] = useState(640);
  const [component, setComponent] = useState(<SlidingUpRecognizedWelcome />);

  const continueButtonHandler = (walletAddress) => {
    if (walletAddress === "Dev" || walletAddress === "Test") {
      setComponent(<ConnectWithVault />);
    }
  };

  const vaultPassswordHandler = (vaultPassword) => {
    setComponent(
      <ConnectWithVault
        warningMessage="Invalid Password"
        displayTooltip={true}
      />
    );
  };

  const backButtonHandler = () => {
    setComponent(<SlidingUpRecognizedWelcome />);
  };

  const closeHandler = () => {
    setShow(0);
  };

  const createAccount = () => {};

  return (
    <AppContext.Provider
      value={{
        continueButtonHandler,
        backButtonHandler,
        vaultPassswordHandler,
        closeHandler,
        createAccount,
      }}
    >
      <SlidingUpPanelComponent show={show}>{component}</SlidingUpPanelComponent>
    </AppContext.Provider>
  );
};

export default MainApp;
