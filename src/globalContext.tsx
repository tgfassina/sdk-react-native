import React, { useState } from "react";
import ConnectWithVault from "../stories/SlidingUpPanel/recognizedDevice/ConnectWithVault";
import SlidingUpRecognizedWelcome from "../stories/SlidingUpPanel/recognizedDevice/Welcome";
import { AppContext } from "./context";

interface IProps {
  children: React.ReactNode;
}

const GlobalContext = (props: IProps) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [show, setShow] = useState(640);
  const [component, setComponent] = useState(<SlidingUpRecognizedWelcome />);

  const continueButtonHandler = (walletAddress) => {
    if (walletAddress === "Dev" || walletAddress === "Test") {
      setComponent(<ConnectWithVault />);
    }
    setWalletAddress(walletAddress);
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

  const createAccount = () => {
    console.log("TODO", walletAddress);
  };

  return (
    <AppContext.Provider
      value={{
        show: show,
        component: component,
        createAccount: createAccount,
        closeHandler: closeHandler,
        continueButtonHandler: continueButtonHandler,
        backButtonHandler: backButtonHandler,
        vaultPassswordHandler: vaultPassswordHandler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
