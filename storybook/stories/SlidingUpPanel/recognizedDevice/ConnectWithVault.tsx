import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "../../icons/SonrLogo";
import VaultPassword from "../../Input/IconText";
import PrimaryButton from "../../PrimaryButton";
import SecuritySafe from "../../icons/SecuritySafe";

type Props = {
	continueButtonHandler?: () => any;
	vaultPasswordHandler?: () => any;
	createAccountHandler?: () => any;
	closeHandler?: () => any;
};

const ConnectWithVault: React.FC<Props> = (props: Props) => {
	let walletAddressInput;
	return (
		<View style={styles.slidePanel}>
			<View style={[styles.header, styles.centerRow]}>
				<SonrLogo textFill="#1D1A27" />
				<Text style={styles.close} onPress={() => props.closeHandler()}>
					Close
				</Text>
			</View>
			<Text style={styles.subtitle2}>Connect with Vault</Text>
			<Text style={styles.subtitle3}>ENTER YOUR VAULT PASSWORD</Text>

			<VaultPassword
				label="Vault Password"
				text={walletAddressInput}
				secureTextEntry={true}
				labelStyle={{ color: "#4F4A60", marginBottom: 8 }}
				inputStyle={styles.vaultInputStyle}
				icon={SecuritySafe()}
				textInputStyle={{color: "#37324A",}}
			/>

			<PrimaryButton
				style={{ marginTop: 250, marginBottom: 16 }}
				onPress={() => props.continueButtonHandler}
				text="Submit"
			/>

			<View style={[styles.centerRow, {justifyContent: "center"}]}>
				<Text>Don't have an account?</Text>
				<Text
					onPress={() => props.createAccountHandler()}
					style={styles.createAccount}
				>
					Create One
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	centerRow: {
		flexDirection: "row",
		width: "90%",
		alignItems: "center"
	},
	header: {
		margin: 32,
		justifyContent: "space-between",
	},
	close: {
		fontFamily: "THICCCBOI_ExtraBold",
		fontStyle: "normal",
		fontWeight: "800",
		fontSize: 14,
		lineHeight: 16,
		letterSpacing: 0.02,
		color: "#AEACB8",
	},
	slidePanel: {
		flex: 1,
		alignItems: "center",
		borderRadius: 36,
		backgroundColor: "#fff",
	},
	subtitle2: {
		fontFamily: "THICCCBOI_ExtraBold",
		fontSize: 24,
		fontWeight: "900",
		lineHeight: 28,
		textAlign: "center",
		color: "#1D1A27",
		marginTop: 24,
	},
	subtitle3: {
		fontFamily: "THICCCBOI_Bold",
		fontSize: 14,
		fontWeight: "700",
		lineHeight: 20,
		textAlign: "center",
		color: "#676376",
		marginTop: 8,
		marginBottom: 48,
	},
	createAccount: {
		fontFamily: "THICCCBOI_ExtraBold",
		fontSize: 14,
		fontWeight: "800",
		lineHeight: 16,
		color: "#1792FF",
		marginLeft: 8
	},
	vaultInputStyle: {
		borderColor: "#9893A2",
		width: 256,
		height: 40
	}
});

export default ConnectWithVault;
