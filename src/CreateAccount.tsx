import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import FieldWithIcon from "./components/FieldWithIcon";
import Check from "./icons/Check";
import CheckNot from "./icons/CheckNot";
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
  const [invalidPassword, setInvalidPassword] = useState([true, true, true]);

  const onSubmit = async () => {
    const userData = await Motor.createAccount(username, vaultPassword);
    if (!userData) {
      setInvalidInput("Input data is invalid");
      return;
    }
    authenticationContext.navigate("AccountCreated", { username });
  };

  const validatePassword = (newText: string) => {
    const assert1 = newText.length < 12;
    const assert2 = /\s/.test(newText);
    const assert3 = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(
      newText
    );

    setInvalidPassword([assert1, assert2, !assert3]);
    setVaultPassword(newText);
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
          onChangeText={(newText) => validatePassword(newText as string)}
          icon="SecuritySafe"
          warning={invalidInput}
          autoFocus={false}
          secureTextEntry={true}
        />

        <View style={styles.rulesContent}>
          <View style={styles.ruleRow}>
            {invalidPassword[0] ? <CheckNot /> : <Check />}
            <Text style={styles.rules}>At least 12 characters</Text>
          </View>
          <View style={styles.ruleRow}>
            {invalidPassword[1] ? <CheckNot /> : <Check />}
            <Text style={styles.rules}>No spaces</Text>
          </View>
          <View style={styles.ruleRow}>
            {invalidPassword[2] ? <CheckNot /> : <Check />}
            <Text style={styles.rules}>
              Combination of numbers, lowercase letters, uppercase letters, and
              special characters:(~!@#$%^&*_-+=`|\(){}[]:;"'`{"<"}
              {">"}`,.?/`)
            </Text>
          </View>
        </View>
      </ContainerContent>

      <ContainerFooter>
        <PrimaryButton
          style={{ marginBottom: 10 }}
          onPress={() => onSubmit()}
          text="Next"
          disabled={
            invalidPassword[0] || invalidPassword[1] || invalidPassword[2]
          }
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
  ruleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  rulesContent: {
    marginHorizontal: 40,
  },
  rules: {
    color: "#9693A2",
    fontFamily: "THICCCBOI_Medium",
    fontSize: 14,
    paddingVertical: 5,
    marginLeft: 8,
  },
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
    alignItems: "stretch",
  },
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 33,
    lineHeight: 40,
    textAlign: "center",
    color: "#fff",
  },
});

export default CreateAccount;
