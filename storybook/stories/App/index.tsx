import React, { useState } from "react";
import { AppContext } from "../../context/context";
import SlidingUpPanelComponent from "../SlidingUpPanel";
import ConnectWithVault from "../SlidingUpPanel/recognizedDevice/ConnectWithVault";
import SlidingUpRecognizedWelcome from "../SlidingUpPanel/recognizedDevice/Welcome";

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
