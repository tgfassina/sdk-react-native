import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import WalletAddress from "./components/IconText";
import SecondaryButton from "./components/SecondaryButton";
import { AuthenticationContext } from "./AuthenticationContext";
import TextButton from "./components/TextButton";
import { ContainerDark } from "./components/ContainerDark";


const SlidingUpRecognizedWelcome: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const [username, setUsername] = useState("");

  return (
    <ContainerDark>
      <View style={styles.header}>
        <SonrLogo />
        {/* <Text style={styles.close} onPress={() => context.closeHandler()}>
          Close
        </Text> */}
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle2}>Welcome Back</Text>
        <WalletAddress
          label="Wallet Address or .snr Domain"
          value={username}
          onChangeText={setUsername}
          icon="user"
        />

        {/* <PrimaryButton
				style={{ marginTop: 20 }}
				onPress={() => props.continueButtonHandler}
				icon={KeyPrint()}
				text="Continue with Keyprint"
			/> */}
      </View>

      <View style={styles.footer}>
        <SecondaryButton
          style={{ marginBottom: 10 }}
          onPress={() => {
            authenticationContext.navigate("ConnectWithVault", { username });
          }}
          text="Continue with Vault Password"
        />
        <TextButton
          text="Create Account"
          onPress={() =>
            authenticationContext.navigate("CreateAccount", { username })
          }
        />
      </View>
    </ContainerDark>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingVertical: 20,
    marginBottom: 20,
    alignItems: "center",
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
});

export default SlidingUpRecognizedWelcome;
