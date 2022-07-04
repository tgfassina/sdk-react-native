import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SonrLogo from "../../icons/SonrLogo";
import PrimaryButton from "../../PrimaryButton";
import SecondaryButton from "../../SecondaryButton";

type Props = {
	createButtonHandler?: any;
	secureButtonHandler?: any;
	skipButtonHandler?: any;
};

const SlidingUpWelcome = (props: Props) => {
	return (
		<View style={styles.slidePanel}>
			<LinearGradient
				style={[styles.gradientContainer]}
				colors={["#686375", "#1D1A27"]}
				locations={[0.0, 1]}
				start={{ x: 0.6, y: 1.5 }}
				end={{ x: 0.4, y: -0.5 }}
			/>
			<Text style={styles.subtitle2}>BEAM CONNECTS WITH</Text>

			<SonrLogo iconStyle={styles.sonrLogo} textStyle={styles.sonrText} />

			<PrimaryButton
				onPress={() => props.createButtonHandler()}
				text="Create Account"
				style={{ marginTop: 40 }}
			/>

			<SecondaryButton
				onPress={() => props.secureButtonHandler()}
				text="Secure Login"
				containerStyle={styles.secButtonBorder}
				textStyle={{ color: "#1792FF" }}
			/>

			<Text onPress={() => props.skipButtonHandler()} style={styles.skipText}>
				Skip
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	secButtonBorder: {
		borderColor: "#1792FF",
		marginTop: 10,
		height: 48,
		width: 296,
		borderRadius: 8,
		borderWidth: 1,
		borderStyle: "solid",
	},
	gradientContainer: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},
	slidePanel: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#686375",
		borderRadius: 36,
	},
	subtitle2: {
		fontFamily: "THICCCBOI_Regular",
		fontSize: 14,
		fontWeight: "700",
		lineHeight: 20,
		letterSpacing: 0.04,
		textAlign: "left",
		color: "white",
		marginTop: 24,
		marginBottom: 14,
	},
	sonrLogo: {
		height: 40,
		width: 40,
	},
	sonrText: {
		height: 40,
		width: 120,
	},
	skipText: {
		fontFamily: "THICCCBOI_ExtraBold",
		fontSize: 14,
		fontWeight: "800",
		lineHeight: 16,
		letterSpacing: 0.02,
		color: "#1792FF",
		marginTop: 24,
	},
});

export default SlidingUpWelcome;
