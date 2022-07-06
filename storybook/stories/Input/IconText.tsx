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

  let fillColor = undefined;
  let borderStyle = undefined;
  if (props.warning) {
    fillColor = "#FF2866";
    borderStyle = { borderColor: "#FF2866" };
  }

  let labelStyle = undefined;
  let inputStyle = undefined;
  let textInputStyle = undefined;
  if (props.lightTheme) {
    labelStyle = { color: "#4F4A60" };
    inputStyle = { borderColor: "#9893A2" };
    textInputStyle = { color: "#37324A" };
  }

  return (
    <View style={styles.containerInput}>
      <Text style={[styles.labelText, labelStyle]}>{props.label}</Text>
      <View style={[styles.input, inputStyle, borderStyle]}>
        {Icon({ fillColor })}
        <TextInput
          style={[styles.textInput, textInputStyle]}
          value={props.text}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
        />
        {props.warning && <WarningOutline />}
      </View>
      <Text style={styles.warningText}>{props.warning}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 40,
  },
  input: {
    flexDirection: "row",
    borderColor: "#F6F5FA",
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
    color: "#F6F5FA",
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
    color: "#F6F5FA",
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
