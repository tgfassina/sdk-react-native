import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "./icons/BackButton";
import { AppContext } from "./context";
import SliderHeader from "./components/SliderHeader";
import PrimaryButton from "./components/PrimaryButton";
import DeviceName from "./components/IconText";

interface IProps {
  user: string;
}

const ScanCodeCamera: React.FC = (props: IProps) => {
  const context = useContext(AppContext);

  const [deviceName, setDeviceName] = useState("");

  return (
    <View style={styles.slidePanel}>
      <SliderHeader closeHandler={() => context.closeHandler()} />

      <Text style={styles.subtitle2}>Device Added</Text>
      <Text style={styles.subtitle3}>WOULD YOU LIKE TO NAME THIS DEVICE?</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => context.backButtonHandler()}
      >
        <BackButton />
      </TouchableOpacity>

      <DeviceName
        label="Device Name"
        text={deviceName}
        onChangeText={(newText) => setDeviceName(newText)}
        icon="none"
        lightTheme={true}
      />

      <Text style={styles.mainMessage}>
        Choose a name for your new device, or click save to use the default. If
        you skip this step, you will have to authenticate this device the next
        time you use it.
      </Text>

      <PrimaryButton
        style={styles.submitButton}
        text="Save"
        disabled={deviceName.length < 5}
        onPress={() => {}}
      />

      <View style={styles.centerRow}>
        <Text onPress={() => {}} style={styles.scanCode}>
          Skip
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32,
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
    marginTop: 80,
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
  mainMessage: {
    fontFamily: "THICCCBOI_Medium",
    fontSize: 12,
    marginBottom: 32,
    marginHorizontal: 40,
    color: "#37324A",
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
    color: "#807B8C",
    marginTop: 8,
    letterSpacing: 0.04,
    width: "50%",
    marginBottom: 48,
  },
  scanCode: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 14,
    lineHeight: 16,
    color: "#1792FF",
    marginLeft: 8,
  },
});

export default ScanCodeCamera;
