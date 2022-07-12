import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};
const TextButton = (props: Props) => {
  return (
    <TouchableOpacity style={{ padding: 5 }} onPress={props.onPress}>
      <Text style={styles.textButton}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textButton: {
    fontSize: 14,
    fontFamily: "THICCCBOI_ExtraBold",
    color: "#1792FF",
  },
});

export default TextButton;
