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

type Props = {
  username: string;
  vaultPassword: string;
};
export const CreateAccountSandbox: React.FC<Props> = (props) => {
  const authenticationContext = useContext(AuthenticationContext);
  const [matrixPassword, setMatrixPassword] = useState("");
  const [usernameMatrix, setUsernameMatrix] = useState("");
  const [warning, setWarning] = useState("");

  const onSubmit = async () => {
    const userData = await Motor.createAccount(
      props.username,
      props.vaultPassword,
      usernameMatrix,
      matrixPassword
    );

    if (!userData) {
      setWarning("Input data is invalid");
      return;
    }
    authenticationContext.navigate("AccountCreated", {});
  };

  return (
    <ContainerDark>
      <ContainerHeader>
        <Text style={styles.title}>Sandbox Options</Text>
      </ContainerHeader>

      <ContainerContent>
        <FieldWithIcon
          label="Your Matrix Username"
          value={usernameMatrix}
          onChangeText={setUsernameMatrix}
          warning={warning}
          autoFocus={true}
          icon="IconUser"
          style={{ marginBottom: 20 }}
        />

        <FieldWithIcon
          label="Your Matrix Password"
          value={matrixPassword}
          onChangeText={setMatrixPassword}
          icon="SecuritySafe"
          warning={warning}
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
          onPress={() => authenticationContext.navigate("CreateAccount", {})}
        />
      </ContainerFooter>
    </ContainerDark>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    textAlign: "center",
    color: "#fff",
  },
});
