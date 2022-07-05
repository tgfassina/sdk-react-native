import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	StyleProp,
	TextStyle,
	ViewStyle,
} from "react-native";

type Props = {
	label: string;
	text: string;
	secureTextEntry?: boolean;
	labelStyle?: StyleProp<TextStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	textInputStyle?: StyleProp<TextStyle>;
	icon: any;
};

const IconText: React.FC<Props> = (props: Props) => {
	return (
		<View style={styles.containerInput}>
			<Text style={[styles.labelText, props.labelStyle]}>{props.label}</Text>
			<View style={[styles.input, props.inputStyle]}>
				{props.icon}
				<TextInput
					style={[styles.textInput, props.textInputStyle]}
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

export default IconText;
