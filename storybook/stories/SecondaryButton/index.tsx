import React from "react";
import {
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from "react-native";

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const SecondaryButton: React.FC<Props> = ({
  onPress,
  text,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "THICCCBOI_ExtraBold",
    color: "#F6F5FA",
  },
});

export default SecondaryButton;
