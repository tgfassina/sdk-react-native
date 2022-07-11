import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "../icons/SonrLogo";

interface Props {
  closeHandler: () => void;
}

const SliderHeader: React.FC<Props> = ({ closeHandler }) => {
  return (
    <View style={[styles.header, styles.centerRow]}>
      <SonrLogo textFill="#1D1A27" />
      <Text style={styles.close} onPress={() => closeHandler()}>
        Close
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 32,
    justifyContent: "space-between",
  },
  centerRow: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  close: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.02,
    color: "#AEACB8",
  },
});

export default SliderHeader;
