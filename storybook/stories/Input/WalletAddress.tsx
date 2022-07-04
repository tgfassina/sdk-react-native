import React from "react";
import { Image, View, Text, StyleSheet, TextInput } from "react-native";
import IconUser from "../icons/User";

type Props = {
  label: string;
  text: string;
};

const WalletAddress: React.FC<Props> = (props: Props) => {
  return (
    <View style={styles.walletInput}>
      <Text style={styles.labelText}>{props.label}</Text>
      <View style={styles.input}>
        <IconUser />
        <TextInput style={styles.textInput} value={props.text} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletInput: {
    flexDirection: "column",
    justifyContent: "center",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F6F5FA",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12
  },
  labelText: {
    fontFamily: "THICCCBOI_Regular",
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "left",
    fontSize: 14,
    lineHeight: 16,
    color: "#F6F5FA",
  },
  textInput: {
    flex: 1,
    paddingVertical: 12,
    marginLeft: 12,
    fontFamily: "THICCCBOI_Regular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 20,
    color: "#F6F5FA",
  },
});

export default WalletAddress;
