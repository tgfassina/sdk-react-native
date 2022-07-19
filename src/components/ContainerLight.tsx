import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const logo = require("../icons/logo_background_white.png");

type Props = {
  children: React.ReactNode;
};
export const ContainerLight: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <ImageBackground style={styles.img} source={logo}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 320,
    width: 320,
    position: "absolute",
    bottom: -56,
    right: -48,
    zIndex: 1,
  },
  container: {
    flex: 1,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: "#FFF",
  },
});
