import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import WalletAddress from "./components/IconText";
import SecondaryButton from "./components/SecondaryButton";
// import TextButton from "./components/TextButton";
import { AuthenticationContext } from "./AuthenticationContext";

const SlidingUpRecognizedWelcome: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const [username, setUsername] = useState("");

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={["#37324A", "#1D1A27"]}
        locations={[0.2, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
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
        {/* <TextButton
          text="Create Account"
          onPress={() => context.createAccount()}
        /> */}
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
    flex: 1,
  },
  footer: {
    paddingVertical: 20,
    marginBottom: 10,
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
