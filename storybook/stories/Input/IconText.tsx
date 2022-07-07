import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import SecuritySafe from "../icons/SecuritySafe";
import IconUser from "../icons/User";
import WarningOutline from "../icons/WarningOutline";

const iconSvg = {
  user: IconUser,
  security: SecuritySafe,
};

type Props = {
  label: string;
  text: string;
  warning?: string;
  secureTextEntry?: boolean;
  onChangeText: Dispatch<SetStateAction<string>>;
  icon: string;
  lightTheme?: boolean;
};

const IconText: React.FC<Props> = (props: Props) => {
  const Icon = iconSvg[props.icon];

  let borderStyle = undefined;
  if (props.warning) {
    borderStyle = { borderColor: "#FF2866" };
  }

  return (
    <View style={styles(props).containerInput}>
      <Text style={[styles(props).labelText]}>{props.label}</Text>
      <View style={[styles(props).input, borderStyle]}>
        {Icon({ fillColor: props.warning && "#FF2866" })}
        <TextInput
          style={[styles(props).textInput]}
          value={props.text}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
        />
        {props.warning && <WarningOutline />}
      </View>
      <Text style={styles(props).warningText}>{props.warning}</Text>
    </View>
  );
};

const styles = (props) =>
  StyleSheet.create({
    containerInput: {
      flexDirection: "column",
      justifyContent: "center",
      width: "100%",
      paddingHorizontal: 40,
    },
    input: {
      flexDirection: "row",
      borderColor: props.lightTheme ? "#F6F5FA" : "#9893A2",
      borderStyle: "solid",
      borderWidth: 1,
      borderRadius: 6,
      alignItems: "center",
      paddingHorizontal: 12,
    },
    labelText: {
      fontFamily: "THICCCBOI_Regular",
      fontStyle: "normal",
      textAlign: "left",
      fontSize: 14,
      lineHeight: 16,
      color: props.lightTheme ? "#4F4A60" : "#F6F5FA",
      marginBottom: 8,
    },
    textInput: {
      flex: 1,
      paddingVertical: 12,
      marginLeft: 12,
      fontFamily: "THICCCBOI_Regular",
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 20,
      color: props.lightTheme ? "#37324A" : "#F6F5FA",
    },
    warningText: {
      fontFamily: "THICCCBOI_Medium",
      fontStyle: "normal",
      textAlign: "left",
      fontSize: 12,
      lineHeight: 16,
      color: "#FF2866",
    },
  });

export default IconText;
