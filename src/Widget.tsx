import * as Font from "expo-font";
import React, { useState } from "react";
import { Modal } from "react-native";
import PromptRecognized from "./PromptRecognized";
import ConnectWithVault from "./ConnectWithVault";
import { WidgetContext } from "./WidgetContext";

Font.loadAsync({
  THICCCBOI_ExtraBold: require("../assets/fonts/THICCCBOI-ExtraBold.ttf"),
  THICCCBOI_Bold: require("../assets/fonts/THICCCBOI-Bold.ttf"),
  THICCCBOI_Medium: require("../assets/fonts/THICCCBOI-Medium.ttf"),
  THICCCBOI_Regular: require("../assets/fonts/THICCCBOI-Regular.ttf"),
});

type Props = {
  onSuccess: () => void;
};
const Widget = ({ onSuccess }: Props) => {
  const [visible, setVisible] = useState(true);
  const [screen, setScreen] = useState(<PromptRecognized />);
  const close = () => setVisible(false);
  const navigate = (screen: string) => {
    setScreen(
      {
        PromptRecognized: <PromptRecognized />,
        ConnectWithVault: <ConnectWithVault />,
      }[screen]
    );
  };
  return (
    <Modal visible={visible}>
      <WidgetContext.Provider value={{ onSuccess, close, navigate }}>
        {screen}
      </WidgetContext.Provider>
    </Modal>
  );
};

export default Widget;
