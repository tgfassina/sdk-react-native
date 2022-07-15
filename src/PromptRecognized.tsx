import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import FieldWithIcon from "./components/FieldWithIcon";
import SecondaryButton from "./components/SecondaryButton";
import { AuthenticationContext } from "./AuthenticationContext";
import TextButton from "./components/TextButton";
import { ContainerDark } from "./components/ContainerDark";

const Component: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const [username, setUsername] = useState("");

  return (
    <ContainerDark>
      <View style={styles.header}>
        <SonrLogo />
      </View>

      <View style={styles.content}>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Welcome Back
        </Text>
        <FieldWithIcon
          label="Wallet Address or .snr Domain"
          value={username}
          onChangeText={setUsername}
          icon="IconUser"
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
  },
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 48,
  },
  footer: {
    paddingVertical: 20,
    marginVertical: 24,
    marginHorizontal: 48,
    alignItems: "center",
  },
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    textAlign: "center",
    color: "#fff",
  },
});

export default Component;
