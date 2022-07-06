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

const SecondaryButtonWhite: React.FC<Props> = ({ onPress, text, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6763761A",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "THICCCBOI_ExtraBold",
    color: "#37324A",
  },
});

export default SecondaryButtonWhite;
