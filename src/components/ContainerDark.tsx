import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
