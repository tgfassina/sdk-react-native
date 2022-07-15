import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AuthenticationContext } from "./AuthenticationContext";
import { ContainerDark } from "./components/ContainerDark";
import {
  ContainerContent,
  ContainerFooter,
  ContainerHeader,
} from "./components/ContainerParts";
import SecondaryButton from "./components/SecondaryButton";
import TextButton from "./components/TextButton";

export const SandboxOptions: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);

  const erase = () => AsyncStorage.removeItem("database");

  return (
    <ContainerDark>
      <ContainerHeader>
        <Text style={styles.title}>Sandbox Options</Text>
      </ContainerHeader>

      <ContainerContent>
        <SecondaryButton text="Erase database" onPress={erase} />
      </ContainerContent>

      <ContainerFooter>
        <TextButton
          text="Back"
          onPress={() => authenticationContext.navigate("PromptRecognized", {})}
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
