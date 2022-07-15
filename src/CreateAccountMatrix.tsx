import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import FieldWithIcon from "./components/FieldWithIcon";
import { AuthenticationContext } from "./AuthenticationContext";
import PrimaryButton from "./components/PrimaryButton";
import Motor from "./sandbox";
import { ContainerDark } from "./components/ContainerDark";
import TextButton from "./components/TextButton";

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
      <View style={styles.header}>
        <SonrLogo />
      </View>

      <View style={styles.content}>
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
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          style={{ marginBottom: 10 }}
          onPress={() => onSubmit()}
          text="Next"
        />

        <TextButton
          text="Back"
          onPress={() => authenticationContext.navigate("CreateAccount", {})}
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

export default CreateAccountMatrix;
