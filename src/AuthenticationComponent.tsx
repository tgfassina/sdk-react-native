import * as Font from "expo-font";
import React, { useState } from "react";
import { Modal, View } from "react-native";
import PromptRecognized from "./PromptRecognized";
import ConnectWithVault from "./ConnectWithVault";
import { AuthenticationContext } from "./AuthenticationContext";
import CreateAccount from "./CreateAccount";
import AccountCreated from "./AccountCreated";
import { AuthenticationProps, ScreenTitle, SonrUserData } from "../types";
import { SandboxOptions } from "./SandboxOptions";
import CreateAccountMatrix from "./CreateAccountMatrix";

Font.loadAsync({
  THICCCBOI_ExtraBold: require("../assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("../assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("../assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("../assets/fonts/THICCCBOI-Regular.ttf"),
});

const Component = ({ onSuccess }: AuthenticationProps) => {
  const [visible, setVisible] = useState(true);
  const [screen, setScreen] = useState(<PromptRecognized />);
  const close = () => setVisible(false);
  const navigate = (screen: ScreenTitle, props: any) => {
    setScreen(
      {
        PromptRecognized: <PromptRecognized {...props} />,
        ConnectWithVault: <ConnectWithVault {...props} />,
        CreateAccount: <CreateAccount {...props} />,
        CreateAccountMatrix: <CreateAccountMatrix {...props} />,
        AccountCreated: <AccountCreated {...props} />,
        SandboxOptions: <SandboxOptions {...props} />,
      }[screen]
    );
  };
  const style = {
    flex: 1,
    marginTop: 80,
  };
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={style}>
        <AuthenticationContext.Provider value={{ onSuccess, close, navigate }}>
          {screen}
        </AuthenticationContext.Provider>
      </View>
    </Modal>
  );
};

export default Component;
