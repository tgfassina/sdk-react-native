import React from "react";
import {
	Image,
	View,
	Text,
	StyleSheet,
	TextInput,
	StyleProp,
	TextStyle,
	ViewStyle,
} from "react-native";
import IconUser from "../icons/User";

type Props = {
	label: string;
	text: string;
	secureTextEntry?: boolean;
	labelStyle?: StyleProp<TextStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	icon: any;
};

const IconText: React.FC<Props> = (props: Props) => {
	return (
		<View style={styles.containerInput}>
			<Text style={[styles.labelText, props.labelStyle]}>{props.label}</Text>
			<View style={[styles.input, props.inputStyle]}>
				{/* <IconUser /> */}
				{props.icon}
				<TextInput
					style={styles.textInput}
					value={props.text}
					secureTextEntry={props.secureTextEntry}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	containerInput: {
		flexDirection: "column",
		justifyContent: "center",
	},
	input: {
		flexDirection: "row",
		justifyContent: "center",
		borderColor: "#F6F5FA",
		borderStyle: "solid",
		borderWidth: 1,
		borderRadius: 6,
		height: 40,
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
		width: 256,
		height: 40,
		fontFamily: "THICCCBOI_Regular",
		fontStyle: "normal",
		fontWeight: "500",
		fontSize: 16,
		lineHeight: 20,
		color: "#F6F5FA",
	},
});

export default IconText;
