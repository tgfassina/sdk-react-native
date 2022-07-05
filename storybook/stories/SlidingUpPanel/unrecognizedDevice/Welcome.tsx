import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SonrLogo from "../../icons/SonrLogo";
import PrimaryButton from "../../PrimaryButton";
import SecondaryButton from "../../SecondaryButton";

type Props = {
  createButtonHandler?: any;
  secureButtonHandler?: any;
  skipButtonHandler?: any;
};

const SlidingUpWelcome = (props: Props) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[styles.gradientContainer]}
        colors={["#686375", "#1D1A27"]}
        locations={[0.0, 1]}
        start={{ x: 0.6, y: 1.5 }}
        end={{ x: 0.4, y: -0.5 }}
      />

      <View style={styles.content}>
        <View style={{ alignItems: "center", marginBottom: 40 }}>
          <SonrLogo />
        </View>

        <PrimaryButton
          onPress={() => props.createButtonHandler()}
          text="Create Account"
          style={{ marginBottom: 10 }}
        />

        <SecondaryButton
          onPress={() => props.secureButtonHandler()}
          text="Secure Login"
        />

        <Text onPress={() => props.skipButtonHandler()} style={styles.skipText}>
          Skip
        </Text>
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
  content: {
    padding: 40,
  },
  subtitle: {
    textTransform: "uppercase",
    fontFamily: "THICCCBOI_Bold",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    letterSpacing: 0.04,
    color: "white",
    marginTop: 24,
    marginBottom: 14,
  },
  skipText: {
    textAlign: "center",
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 16,
    letterSpacing: 0.02,
    color: "#1792FF",
    marginTop: 24,
  },
});

export default SlidingUpWelcome;
