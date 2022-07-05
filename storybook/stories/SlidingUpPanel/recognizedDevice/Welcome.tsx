import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "../../icons/SonrLogo";
import WalletAddress from "../../Input/WalletAddress";
import SecondaryButton from "../../SecondaryButton";

type Props = {
  continueButtonHandler?: () => any;
  vaultPasswordHandler?: () => any;
  createAccountHandler?: () => any;
  closeHandler?: () => any;
  onSuccess: () => void;
};

const SlidingUpRecognizedWelcome: React.FC<Props> = (props: Props) => {
  let walletAddressInput;
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={["#37324A", "#1D1A27"]}
        locations={[0.2, 1]}
        start={{ x: 0.0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      <View style={styles.header}>
        <SonrLogo />
        <Text style={styles.close} onPress={() => props.closeHandler()}>
          Close
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Welcome Back</Text>
        <WalletAddress
          label="Walled Address or .snr Domain"
          text={walletAddressInput}
        />
        <SecondaryButton
          style={{ marginTop: 16 }}
          onPress={props.onSuccess}
          text="Login"
        />
        {/* <PrimaryButton
				style={{ marginTop: 20 }}
				onPress={() => props.continueButtonHandler}
				icon={KeyPrint()}
				text="Continue with Keyprint"
			/> */}
        <Text style={styles.subtitle3}>OR CONTINUE WITH</Text>
        <SecondaryButton
          onPress={() => props.vaultPasswordHandler()}
          text="Vault Password"
        />
        <Text
          onPress={() => props.createAccountHandler()}
          style={styles.createAccount}
        >
          Create Account
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  header: {
    padding: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 40,
  },
  close: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    color: "#AEACB8",
  },
  title: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    fontWeight: "800",
    textAlign: "center",
    color: "#fff",
    marginBottom: 64,
  },
  subtitle3: {
    fontFamily: "THICCCBOI_Regular",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    textAlign: "center",
    color: "#AEACB8",
    paddingTop: 135,
  },
  createAccount: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 16,
    color: "#1792FF",
    paddingTop: 24,
  },
});

export default SlidingUpRecognizedWelcome;
