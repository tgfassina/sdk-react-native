import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  onPress: () => void;
  text: string;
}

const PrimaryButton: React.FC<Props> = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={styles.buttonGradient}
        colors={["#63B6FF", "#1792FF", "#046DE8"]}
        locations={[0.0, 0.5, 1]}
        start={{ x: 0.6, y: 1.5 }}
        end={{ x: 0.4, y: -0.5 }}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonGradient: {
    borderRadius: 6,
    height: 48,
    width: 296,
    alignItems: "center",
  },
  buttonText: {
    // fontFamily: "THICCCBOI_ExtraBold",
    textAlign: "center",
    color: "#fff",
    padding: 14,
    fontSize: 18,
    fontWeight: "800",
    letterSpacing: 0,
  },
});

export default PrimaryButton;
