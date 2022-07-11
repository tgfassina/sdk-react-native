import React, { useState } from "react";
import ConnectWithVault from "./ConnectWithVault";
import PromptRecognized from "./PromptRecognized";
import { AppContext } from "./context";
import { login } from "./sdkApi";

const environment = "sandbox";

type Props = {
  children: React.ReactNode;
  onSuccess: () => void;
};

const GlobalContext = (props: Props) => {
  const [walletAddress, setWalletAddress] = useState("");
  const [show, setShow] = useState(1000);
  const [component, setComponent] = useState(<PromptRecognized />);

  const continueButtonHandler = (walletAddress) => {
    if (walletAddress === "Dev" || walletAddress === "Test") {
      setComponent(<ConnectWithVault onSuccess={props.onSuccess} />);
    }
    setWalletAddress(walletAddress);
  };

  const vaultPassswordHandler = (vaultPassword) => {
    if (environment === "sandbox") {
      setComponent(
        <ConnectWithVault
          onSuccess={props.onSuccess}
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
