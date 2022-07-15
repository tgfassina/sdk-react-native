import React, { Dispatch, SetStateAction } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ViewStyle,
  StyleProp,
} from "react-native";
import { InputIcon } from "../../types";
import SecuritySafe from "../icons/SecuritySafe";
import IconUser from "../icons/User";
import WarningOutline from "../icons/WarningOutline";

const icons = {
  IconUser: IconUser,
  SecuritySafe: SecuritySafe,
};

type Props = {
  label: string;
  value: string;
  warning?: string;
  secureTextEntry?: boolean;
  onChangeText: Dispatch<SetStateAction<string>>;
  icon: InputIcon;
  lightTheme?: boolean;
  autoFocus?: boolean;
  style?: StyleProp<ViewStyle>;
};
const FieldWithIcon: React.FC<Props> = (props: Props) => {
  const styles = getStyles(!!props.lightTheme);
  const Icon = icons[props.icon];

  let borderStyle = undefined;
  if (props.warning) {
    borderStyle = { borderColor: "#FF2866" };
  }

  return (
    <View style={props.style}>
      <Text style={[styles.labelText]}>{props.label}</Text>
      <View style={[styles.input, borderStyle]}>
        {Icon(props.warning && "#FF2866")}
        <TextInput
          style={[styles.textInput]}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
          autoFocus={props.autoFocus}
          autoCapitalize={"none"}
          autoCorrect={false}
        />
        {props.warning ? <WarningOutline /> : null}
      </View>
      {!!props.warning && (
        <Text style={styles.warningText}>{props.warning}</Text>
      )}
    </View>
  );
};

const getStyles = (lightTheme: boolean) =>
  StyleSheet.create({
    input: {
      flexDirection: "row",
      borderColor: lightTheme ? "#AEACB8" : "#9893A2",
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
      color: lightTheme ? "#4F4A60" : "#F6F5FA",
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
      color: lightTheme ? "#37324A" : "#F6F5FA",
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

export default FieldWithIcon;
