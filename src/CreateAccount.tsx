import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import IconText from "./components/IconText";
import { AuthenticationContext } from "./AuthenticationContext";
import PrimaryButton from "./components/PrimaryButton";
import Motor from "./sandbox";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateAccount: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);
  const [vaultPassword, setVaultPassword] = useState("");
  const [username, setUsername] = useState("");
  const [invalidInput, setInvalidInput] = useState("");

  const onSubmit = async () => {
    const userData = await Motor.createAccount(username, vaultPassword);
    if (!userData) {
      setInvalidInput("Input data is invalid");
      return;
    }
    authenticationContext.navigate("AccountCreated", { username });
  };

  const clearStorage = async () => {
    AsyncStorage.removeItem("database");
  };

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
        <SonrLogo onPress={() => clearStorage()} />
        <Text
          style={styles.close}
          onPress={() => authenticationContext.close()}
        >
          Close
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle2}>Create your account</Text>
        <IconText
          label="Your Username"
          value={username}
          onChangeText={setUsername}
          warning={invalidInput}
          autoFocus={true}
          icon="user"
        />

        <IconText
          label="Your Vault Password"
          value={vaultPassword}
          onChangeText={setVaultPassword}
          icon="security"
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

export default CreateAccount;
