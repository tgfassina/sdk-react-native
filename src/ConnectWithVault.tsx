import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
// import HelpBalloon from "./icons/HelpBalloon";
import BackButton from "./icons/BackButton";
import VaultPassword from "./components/IconText";
import PrimaryButton from "./components/PrimaryButton";
// import SecondaryButtonWhite from "../storybook/stories/SecondaryButton/WhiteMode";
import { AppContext } from "./context";
import { WidgetContext } from "./WidgetContext";

type Props = {
  warningMessage?: string;
  displayTooltip?: boolean;
};

const ConnectWithVault: React.FC<Props> = (props: Props) => {
  const context = useContext(AppContext);
  const widgetContext = useContext(WidgetContext);
  const [vaultPasswordInput, setvaultPasswordInput] = React.useState("");

  const onSubmit = () => {
    widgetContext.close();
    widgetContext.onSuccess();
  };

  return (
    <View style={styles.slidePanel}>
      <View style={[styles.header, styles.centerRow]}>
        <SonrLogo textFill="#1D1A27" />
        <Text style={styles.close} onPress={() => context.closeHandler()}>
          Close
        </Text>
      </View>
      <Text style={styles.subtitle2}>Connect with Vault</Text>
      <Text style={styles.subtitle3}>ENTER YOUR VAULT PASSWORD</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => widgetContext.navigate("PromptRecognized")}
      >
        <BackButton />
      </TouchableOpacity>

      <VaultPassword
        label="Vault Password"
        text={vaultPasswordInput}
        onChangeText={setvaultPasswordInput}
        secureTextEntry={true}
        icon="security"
        warning={props.warningMessage}
        lightTheme={true}
      />

      {/* <View style={styles.tooltipStyle}>
        <HelpBalloon style={styles.helpBalloon} />
        <View>
          <Text style={styles.tooltipText}>
            It looks like you may have forgotten your Vault Password. Please try
            logging in on a recognized device. You can reset your Vault Password
            in&nbsp;
            <Text style={styles.tooltipTextSettings}>Settings</Text>
          </Text>
          <SecondaryButtonWhite onPress={() => {}} text="Dismiss" />
        </View>
      </View> */}

      <PrimaryButton
        style={styles.submitButton}
        onPress={onSubmit}
        text="Submit"
        disabled={vaultPasswordInput.length < 1}
      />

      <View
        style={[
          styles.centerRow,
          { justifyContent: "center", marginBottom: 32 },
        ]}
      >
        {/* <Text>Don't have an account?</Text>
        <Text
          onPress={() => context.createAccount()}
          style={styles.createAccount}
        >
          Create One
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tooltipTextSettings: {
    fontFamily: "THICCCBOI_ExtraBold",
  },
  // helpBalloon: {
  //   marginBottom: "auto",
  //   marginHorizontal: 10,
  // },
  tooltipText: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 1,
    fontFamily: "THICCCBOI_Regular",
    marginBottom: 16,
  },
  tooltipStyle: {
    flexDirection: "row",
    marginHorizontal: 60,
    paddingBottom: 16,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#1D1A270D",
    marginTop: 16,
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
  centerRow: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
  },
  header: {
    margin: 32,
    justifyContent: "space-between",
  },
  close: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.02,
    color: "#AEACB8",
  },
  slidePanel: {
    flex: 1,
    alignItems: "center",
    borderRadius: 36,
    backgroundColor: "#fff",
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
