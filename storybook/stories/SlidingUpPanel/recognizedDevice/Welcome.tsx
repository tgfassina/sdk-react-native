import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../../../context/context";
import SonrLogo from "../../icons/SonrLogo";
import WalletAddress from "../../Input/IconText";
import SecondaryButton from "../../SecondaryButton";

type Props = {
  vaultPasswordHandler?: () => any;
  createAccountHandler?: () => any;
  closeHandler?: () => any;
};

const SlidingUpRecognizedWelcome: React.FC<Props> = (props: Props) => {
  const context = useContext(AppContext);
  const [walletAddressInput, setSalletAddressInput] = useState("");
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
        <Text style={styles.close} onPress={() => context.closeHandler()}>
          Close
        </Text>
      </View>
      <Text style={styles.subtitle2}>Welcome Back</Text>
      <WalletAddress
        label="Walled Address or .snr Domain"
        text={walletAddressInput}
        onChangeText={(newText) => setSalletAddressInput(newText)}
        icon="user"
      />
      <SecondaryButton
        style={{ marginTop: 16, marginHorizontal: 40 }}
        onPress={() => {
          context.continueButtonHandler(walletAddressInput);
        }}
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
        onPress={() => context.createAccount()}
        text="Vault Password"
        style={{ marginHorizontal: 40, marginTop: 16 }}
      />
      <Text
        onPress={() => context.createAccount()}
        style={styles.createAccount}
      >
        Create Account
      </Text>
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
    fontSize: 14,
    color: "#AEACB8",
  },
  title: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    textAlign: "center",
    color: "#fff",
    marginBottom: 64,
  },
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    color: "#fff",
    paddingBottom: 64,
    marginTop: 24,
  },
  subtitle3: {
    fontFamily: "THICCCBOI_Regular",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#AEACB8",
    paddingTop: 135,
  },
  createAccount: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 14,
    lineHeight: 16,
    color: "#1792FF",
    paddingTop: 24,
    flex: 1,
    alignSelf: "center",
  },
});

export default SlidingUpRecognizedWelcome;
