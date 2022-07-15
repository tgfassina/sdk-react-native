import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import FieldWithIcon from "./components/FieldWithIcon";
import SecondaryButton from "./components/SecondaryButton";
import { AuthenticationContext } from "./AuthenticationContext";
import TextButton from "./components/TextButton";
import { ContainerDark } from "./components/ContainerDark";
import {
  ContainerHeader,
  ContainerContent,
  ContainerFooter,
} from "./components/ContainerParts";

const Component: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const [username, setUsername] = useState("");

  return (
    <ContainerDark>
      <ContainerHeader>
        <TouchableOpacity
          onPress={() => authenticationContext.navigate("SandboxOptions", {})}
        >
          <SonrLogo />
        </TouchableOpacity>
      </ContainerHeader>

      <ContainerContent>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Welcome Back
        </Text>
        <FieldWithIcon
          label="Wallet Address or .snr Domain"
          value={username}
          onChangeText={setUsername}
          icon="IconUser"
        />
      </ContainerContent>

      <ContainerFooter>
        <SecondaryButton
          style={{ marginBottom: 10, alignSelf: "center" }}
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
      </ContainerFooter>
    </ContainerDark>
  );
};

const styles = StyleSheet.create({
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    textAlign: "center",
    color: "#fff",
  },
});

export default Component;
