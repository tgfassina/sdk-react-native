import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import { AuthenticationContext } from "./AuthenticationContext";
import PrimaryButton from "./components/PrimaryButton";
import { ContainerDark } from "./components/ContainerDark";
import {
  ContainerHeader,
  ContainerContent,
  ContainerFooter,
} from "./components/ContainerParts";

const AccountCreated: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);

  return (
    <ContainerDark>
      <ContainerHeader>
        <SonrLogo />
      </ContainerHeader>

      <ContainerContent>
        <Text style={[styles.subtitle2, { marginBottom: 64 }]}>
          Account Created!
        </Text>
      </ContainerContent>

      <ContainerFooter>
        <PrimaryButton
          onPress={() => {
            authenticationContext.close();
          }}
          text="Next"
        />
      </ContainerFooter>
    </ContainerDark>
  );
};

const styles = StyleSheet.create({
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    color: "#fff",
  },
});

export default AccountCreated;
