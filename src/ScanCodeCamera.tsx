import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackButton from "./icons/BackButton";
import { AppContext } from "./context";
import SliderHeader from "./components/SliderHeader";
import PrimaryButton from "./components/PrimaryButton";
import IconDevice from "./icons/Duotone";

interface IProps {
  user: string;
}

const ScanCodeCamera: React.FC = (props: IProps) => {
  const context = useContext(AppContext);

  return (
    <View style={styles.slidePanel}>
      <SliderHeader closeHandler={() => context.closeHandler()} />

      <Text style={styles.subtitle2}>Go to the Devices tab</Text>
      <Text style={styles.subtitle3}>OPEN SONR ON {props.user}</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => context.backButtonHandler()}
      >
        <BackButton />
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchIconDevice} onPress={() => {}}>
        <IconDevice />
      </TouchableOpacity>

      <Text style={styles.mainMessage}>
        If you choose to scan the code you will need to provide access to your
        camera on this device.
      </Text>

      <PrimaryButton
        style={styles.submitButton}
        text="Scan Code with Camera"
        disabled={true}
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
  touchIconDevice: {
    padding: 20,
    marginBottom: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFFB2",
    borderColor: "#FFFFFF44",
    borderRadius: 12,
    shadowColor: "rgba(22, 34, 51, 0.2)",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.8,
    shadowRadius: 16,
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
    fontFamily: "THICCCBOI_Regular",
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
    color: "#676376",
    marginTop: 8,
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
