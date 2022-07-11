import React from "react";
import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import IconDevice from "../icons/Device";

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const DeviceItem: React.FC<Props> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <IconDevice />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    width: "72%",
    alignItems: "center",

    backgroundColor: "#FFFFFFB2",
    borderColor: "#FFFFFF44",
    shadowColor: "rgba(22, 34, 51, 0.2)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16,
  },
  text: {
    marginLeft: 16,
    textAlign: "center",
    fontSize: 16,
    fontFamily: "THICCCBOI_ExtraBold",
    color: "#37324A",
    letterSpacing: 1,
    paddingVertical: 22,
  },
});

export default DeviceItem;
