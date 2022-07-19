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

interface IProps {
  username: string;
  vaultPassword: string;
}

const CreateAccountMatrix: React.FC<IProps> = (props: IProps) => {
  const authenticationContext = useContext(AuthenticationContext);
  const [matrixPassword, setMatrixPassword] = useState("");
  const [usernameMatrix, setUsernameMatrix] = useState("");
  const [invalidInput, setInvalidInput] = useState("");

  const onSubmit = async () => {
    const userData = await Motor.createAccount(
      props.username,
      props.vaultPassword,
      usernameMatrix,
      matrixPassword
    );

    if (!userData) {
      setInvalidInput("Input data is invalid");
      return;
    }
    authenticationContext.navigate("AccountCreated", {});
  };

  return (
    <ContainerDark>
      <ContainerHeader>
        <SonrLogo />
      </ContainerHeader>

      <ContainerContent>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Set your Matrix account
        </Text>

        <FieldWithIcon
          label="Your Matrix Username"
          value={usernameMatrix}
          onChangeText={setUsernameMatrix}
          warning={invalidInput}
          autoFocus={true}
          icon="IconUser"
          style={{ marginBottom: 20 }}
        />

        <FieldWithIcon
          label="Your Matrix Password"
          value={matrixPassword}
          onChangeText={setMatrixPassword}
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
          onPress={() => authenticationContext.navigate("CreateAccount", {})}
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

export default CreateAccountMatrix;
