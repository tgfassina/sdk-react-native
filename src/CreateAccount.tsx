import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import FieldWithIcon from "./components/FieldWithIcon";
import { AuthenticationContext } from "./AuthenticationContext";
import PrimaryButton from "./components/PrimaryButton";
import Motor from "./sandbox";
import { ContainerDark } from "./components/ContainerDark";
import TextButton from "./components/TextButton";
import {
  ContainerHeader,
  ContainerContent,
  ContainerFooter,
} from "./components/ContainerParts";

const CreateAccount: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const [vaultPassword, setVaultPassword] = useState("");
  const [username, setUsername] = useState("");
  const [invalidInput, setInvalidInput] = useState("");

  const onSubmit = async () => {
    authenticationContext.navigate("CreateAccountSandbox", {
      username,
      vaultPassword,
    });
  };

  return (
    <ContainerDark>
      <ContainerHeader>
        <SonrLogo />
      </ContainerHeader>

      <ContainerContent>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Create your account
        </Text>

        <FieldWithIcon
          label="Your Username"
          value={username}
          onChangeText={setUsername}
          warning={invalidInput}
          autoFocus={true}
          icon="IconUser"
          style={{ marginBottom: 20 }}
        />

        <FieldWithIcon
          label="Your Vault Password"
          value={vaultPassword}
          onChangeText={setVaultPassword}
          icon="SecuritySafe"
          warning={invalidInput}
          autoFocus={false}
          secureTextEntry={true}
        />
      </ContainerContent>

      <ContainerFooter>
        <PrimaryButton
          style={{ marginBottom: 10 }}
          onPress={() => onSubmit()}
          text="Next"
        />

        <TextButton
          text="Back"
          onPress={() => authenticationContext.navigate("PromptRecognized", {})}
        />
      </ContainerFooter>
    </ContainerDark>
  );
};

const styles = StyleSheet.create({
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 33,
    lineHeight: 40,
    textAlign: "center",
    color: "#fff",
  },
});

export default CreateAccount;
