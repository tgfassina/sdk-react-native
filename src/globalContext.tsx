import React, { useState } from "react";
import ConnectWithVault from "./ConnectWithVault";
import PromptRecognized from "./PromptRecognized";
import { AppContext } from "./context";
import { login } from "./sdkApi";

const environment = "sandbox";

interface IProps {
  children: React.ReactNode;
}

const GlobalContext = (props: IProps) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [show, setShow] = useState(640);
  const [component, setComponent] = useState(<PromptRecognized />);
  const [devices, setDevices] = useState(["Dylan's iMac", "Dylan's iPhone"]);

  const continueButtonHandler = (walletAddress) => {
    if (walletAddress === "Dev" || walletAddress === "Test") {
      setComponent(<ConnectWithVault />);
    }
    setWalletAddress(walletAddress);
  };

  const vaultPassswordHandler = (vaultPassword) => {
    if (environment === "sandbox") {
      setComponent(
        <ConnectWithVault
          warningMessage="Invalid Password"
          displayTooltip={true}
        />
      );
    } else {
      login(vaultPassword, walletAddress);
    }
  };

  const backButtonHandler = () => {
    setComponent(<PromptRecognized />);
  };

  const closeHandler = () => {
    setShow(0);
  };

  const createAccount = () => {};

  return (
    <AppContext.Provider
      value={{
        show,
        component,
        devices,
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
