import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import { AuthenticationContext } from "./AuthenticationContext";
import PrimaryButton from "./components/PrimaryButton";
import { ContainerDark } from "./components/ContainerDark";

const AccountCreated: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);

  return (
    <ContainerDark>
      <View style={styles.header}>
        <SonrLogo />
      </View>

      <View style={styles.content}>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Account Created!
        </Text>
      </View>

      <View style={styles.footer}>
        <PrimaryButton
          onPress={() => {
            authenticationContext.close();
          }}
          text="Next"
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

export default AccountCreated;
