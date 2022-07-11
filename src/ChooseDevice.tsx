import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "./icons/BackButton";
import { AppContext } from "./context";
import DeviceItem from "./components/DeviceItem";
import SliderHeader from "./components/SliderHeader";

const ConnectWithVault: React.FC = () => {
  const context = useContext(AppContext);

  return (
    <View style={styles.slidePanel}>
      <SliderHeader closeHandler={() => context.closeHandler()} />

      <Text style={styles.subtitle2}>Authenticate Device</Text>
      <Text style={styles.subtitle3}>CHOOSE A NEARBY SONR DEVICE</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => context.backButtonHandler()}
      >
        <BackButton />
      </TouchableOpacity>

      <Text style={{ marginBottom: 32, marginHorizontal: 40 }}>
        You will be prompted to provide the Device Code found in the Devices Tab
        of your Sonr device.{" "}
      </Text>

      {context?.devices?.map((device) => (
        <DeviceItem
          key={device}
          style={styles.deviceItem}
          text={device}
          onPress={() => {}}
        />
      ))}

      <View style={styles.centerRow}>
        <Text style={styles.footer}>Don't have an account?</Text>
        <Text
          onPress={() => context.createAccount()}
          style={styles.createAccount}
        >
          Create One
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerRow: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 140,
    marginBottom: 32,
  },
  deviceItem: {
    marginVertical: 8,
  },
  dismissButton: {
    backgroundColor: "#6763761A",
  },
  backButton: {
    backgroundColor: "#6763761A",
    position: "absolute",
    width: 32,
    height: 32,
    left: 16,
    top: 136,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    marginTop: 235,
    marginBottom: 16,
    width: "100%",
    paddingHorizontal: 60,
  },
  slidePanel: {
    flex: 1,
    alignItems: "center",
    borderRadius: 36,
    backgroundColor: "#fff",
  },
  footer: {
    fontFamily: "THICCCBOI_Regular",
    fontSize: 14,
  },
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    color: "#1D1A27",
    marginTop: 24,
  },
  subtitle3: {
    fontFamily: "THICCCBOI_Bold",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#676376",
    marginTop: 8,
    marginBottom: 48,
  },
  createAccount: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 14,
    lineHeight: 16,
    color: "#1792FF",
    marginLeft: 8,
  },
});

export default ConnectWithVault;
