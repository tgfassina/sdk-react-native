import React from "react";
import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const SecondaryButton: React.FC<Props> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 48,
    width: 296,
    borderColor: "#1792FF",
    borderWidth: 1,
    borderStyle: "solid",
  },
  buttonText: {
    textAlign: "center",
    color: "#1792FF",
    padding: 14,
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 20,
    letterSpacing: 0,
  },
});

export default SecondaryButton;
