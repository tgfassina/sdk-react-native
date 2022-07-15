import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import logo from "../logo_trans.png";

type Props = {
  children: React.ReactNode;
};
export const ContainerDark: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradient}
        colors={["#37324A", "#1D1A27"]}
        locations={[0.2, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
      {children}
      <ImageBackground style={styles.img} source={logo}></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    resizeMode: "contain",
    height: 320,
    width: 320,
    position: "absolute",
    bottom: -56,
    right: -48,
    zIndex: 1,
  },
  container: {
    flex: 1,
  },
  gradient: {
    width: "100%",
    height: "120%",
    position: "absolute",
    borderRadius: 16,
  },
});
