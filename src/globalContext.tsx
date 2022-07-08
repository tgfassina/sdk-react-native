import React, { useState } from "react";
import ConnectWithVault from "../stories/SlidingUpPanel/recognizedDevice/ConnectWithVault";
import SlidingUpRecognizedWelcome from "../stories/SlidingUpPanel/recognizedDevice/Welcome";
import { AppContext } from "./context";

interface IProps {
  children: React.ReactNode;
}

export default class GlobalContext extends React.Component<IProps> {
  state = {
    walletAddress: "",
    show: 640,
    component: <SlidingUpRecognizedWelcome />,
  };

  continueButtonHandler = (walletAddress) => {
    if (walletAddress === "Dev" || walletAddress === "Test") {
      this.setState({ component: <ConnectWithVault /> });
    }
    this.setState({ walletAddress });
  };

  // const success = await sdk.login()
  vaultPassswordHandler = (vaultPassword) => {
    this.setState({
      component: (
        <ConnectWithVault
          warningMessage="Invalid Password"
          displayTooltip={true}
        />
      ),
    });
  };

  backButtonHandler = () => {
    this.setState({ component: <SlidingUpRecognizedWelcome /> });
  };

  closeHandler = () => {
    this.setState({ show: 0 });
  };

  //TODO
  createAccount = () => {
    console.log("TODO", this.state.walletAddress);
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          show: this.state.show,
          component: this.state.component,
          createAccount: this.createAccount,
          closeHandler: this.closeHandler,
          continueButtonHandler: this.continueButtonHandler,
          backButtonHandler: this.backButtonHandler,
          vaultPassswordHandler: this.vaultPassswordHandler,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
