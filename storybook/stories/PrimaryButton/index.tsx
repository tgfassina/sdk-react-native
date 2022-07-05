import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import KeyPrint from "../icons/KeyPrint";

interface Props {
  onPress: () => void;
  text: string;
  style?: StyleProp<ViewStyle>;
  icon?: any;
  disabled: boolean
}

const PrimaryButton: React.FC<Props> = ({ onPress, text, style, icon, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
      <LinearGradient
        style={styles.container}
        colors={ disabled ? ["#4F4A60", "#4F4A60", "#4F4A60"] : ["#63B6FF", "#1792FF", "#046DE8"]}
        locations={[0.0, 0.5, 1]}
        start={{ x: 0.6, y: 1.5 }}
        end={{ x: 0.4, y: -0.5 }}
      >
        {icon}
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    alignItems: "center",
  },
  text: {
    fontFamily: "THICCCBOI_ExtraBold",
    alignItems: "center",
    padding: 12,
    color: "#fff",
    fontSize: 18,
  },
});

export default PrimaryButton;
