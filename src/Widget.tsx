import * as Font from "expo-font";
import React from "react";
import { Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PromptRecognized from "./PromptRecognized";
import ConnectWithVault from "./ConnectWithVault";
const Stack = createStackNavigator();
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
  return (
    <Modal style={{ backgroundColor: "pink" }}>
      <WidgetContext.Provider value={{ onSuccess }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PromptRecognized"
              component={PromptRecognized}
            />
            <Stack.Screen
              name="ConnectWithVault"
              component={ConnectWithVault}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </WidgetContext.Provider>
    </Modal>
  );
};

export default Widget;
