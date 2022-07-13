import * as Font from "expo-font";
import React, { useState } from "react";
import { Modal, View } from "react-native";
import PromptRecognized from "./PromptRecognized";
import ConnectWithVault from "./ConnectWithVault";
import { AuthenticationContext } from "./AuthenticationContext";
import CreateAccount from "./CreateAccount";
import AccountCreated from "./AccountCreated";

Font.loadAsync({
  THICCCBOI_ExtraBold: require("../assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("../assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("../assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("../assets/fonts/THICCCBOI-Regular.ttf"),
});

type Props = {
  onSuccess: () => void;
  createAccount: () => void;
};
const Component = ({ onSuccess, createAccount }: Props) => {
  const [visible, setVisible] = useState(true);
  const [screen, setScreen] = useState(<PromptRecognized />);
  const close = () => setVisible(false);
  const navigate = (screen: string, props: any) => {
    setScreen(
      {
        PromptRecognized: <PromptRecognized {...props} />,
        ConnectWithVault: <ConnectWithVault {...props} />,
        CreateAccount: <CreateAccount {...props} />,
        AccountCreated: <AccountCreated {...props} />,
      }[screen]
    );
  };
  const style = {
    flex: 1,
    marginTop: 80,
  };
  return (
    <Modal visible={visible} transparent={true}>
      <View style={style}>
        <AuthenticationContext.Provider
          value={{ onSuccess, close, navigate, createAccount }}
        >
          {screen}
        </AuthenticationContext.Provider>
      </View>
    </Modal>
  );
};

export default Component;
