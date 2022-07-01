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
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const SecondaryButton: React.FC<Props> = ({
  onPress,
  text,
  containerStyle,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}
    >
      <Text style={[textStyle, styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 20,
    letterSpacing: 0,
  },
});

export default SecondaryButton;
