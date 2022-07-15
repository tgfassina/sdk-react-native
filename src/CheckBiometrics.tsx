import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import { AuthenticationContext } from "./AuthenticationContext";
import PrimaryButton from "./components/PrimaryButton";
import { ContainerDark } from "./components/ContainerDark";
import * as LocalAuthentication from "expo-local-authentication";

const CheckBiometrics: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);

  const isBiometricSupport = async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    console.log("my reposnd is", compatible);

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "hello - propmt message",
    }); //2 - facial
  };
  useEffect(() => {
    isBiometricSupport();
  }, []);

  return (
    <ContainerDark>
      <View style={styles.header}>
        <SonrLogo />
      </View>

      <View style={styles.content}>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Sonr Uses KeyPrints
        </Text>
        <Text>
          A KeyPrint is another fragment of your credentials that is linked to a
          device’s biometric reader, like FaceID or TouchID.
        </Text>
        <Text>
          KeyPrints allow Sonr to securely recognize your account’s devices,
          without requiring a password.
        </Text>
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          onPress={() => {
            authenticationContext.close();
          }}
          text="Link Keyprint Now"
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
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    color: "#fff",
  },
});

export default CheckBiometrics;
