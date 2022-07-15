import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AuthenticationContext } from "./AuthenticationContext";
import { ContainerDark } from "./components/ContainerDark";
import SecondaryButton from "./components/SecondaryButton";
import TextButton from "./components/TextButton";

export const SandboxOptions: React.FC = () => {
  const authenticationContext = useContext(AuthenticationContext);

  const erase = () => AsyncStorage.removeItem("database");

  return (
    <ContainerDark>
      <View style={styles.header}>
        <Text style={styles.title}>Sandbox Options</Text>
      </View>

      <View style={styles.content}>
        <SecondaryButton text="Erase database" onPress={erase} />
      </View>

      <View style={styles.footer}>
        <TextButton
          text="Back"
          onPress={() => authenticationContext.navigate("PromptRecognized", {})}
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
    alignItems: "center",
  },
  title: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 34,
    textAlign: "center",
    color: "#fff",
  },
});
