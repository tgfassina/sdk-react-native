import React, { Dispatch, SetStateAction, useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HelpBalloon from "./icons/HelpBalloon";
import BackButton from "./icons/BackButton";
import VaultPassword from "./components/IconText";
import IconTextInput from "./components/IconText";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButtonWhite from "../storybook/stories/SecondaryButton/WhiteMode";
import { AppContext } from "./context";
import SliderHeader from "./components/SliderHeader";

type Props = {
  warningMessage?: string;
  displayTooltip?: boolean;
  setDisplayTooltip?: Dispatch<SetStateAction<boolean>>;
};

const ConnectWithVault: React.FC<Props> = (props: Props) => {
  const context = useContext(AppContext);
  const [vaultPasswordInput, setVaultPasswordInput] = React.useState("");
  const [sonrId, setSonrId] = React.useState("");

  return (
    <View style={styles.slidePanel}>
      <SliderHeader closeHandler={() => context.closeHandler()} />
      <Text style={styles.subtitle2}>Authenticate Device</Text>
      <Text style={styles.subtitle3}>ENTER YOUR VAULT CREDENTIALS</Text>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => context.backButtonHandler()}
      >
        <BackButton />
      </TouchableOpacity>

      <IconTextInput
        label="Walled Address or .snr Domain"
        text={sonrId}
        onChangeText={(newText) => setSonrId(newText)}
        icon="user"
        lightTheme={true}
      />

      <VaultPassword
        label="Vault Password"
        text={vaultPasswordInput}
        onChangeText={setVaultPasswordInput}
        secureTextEntry={true}
        icon="security"
        warning={props.warningMessage}
        lightTheme={true}
      />

      {props.displayTooltip && (
        <View style={styles.tooltipStyle}>
          <HelpBalloon style={styles.helpBalloon} />
          <View>
            <Text numberOfLines={5} style={styles.tooltipText}>
              <Text>It looks like you may have forgotten</Text>
              <Text> your Vault Password. Please try</Text>
              <Text> logging in on a recognized device.</Text>
              <Text> You can reset your Vault Password in </Text>
              <Text style={styles.tooltipTextSettings}>Settings</Text>
            </Text>
            <SecondaryButtonWhite
              onPress={() => props.setDisplayTooltip(!props.displayTooltip)}
              text="Dismiss"
            />
          </View>
        </View>
      )}

      <PrimaryButton
        style={styles.submitButton}
        onPress={() => context.vaultPassswordHandler(vaultPasswordInput)}
        text="Authenticate with Nearby Device"
        disabled={vaultPasswordInput.length < 1}
      />

      <View
        style={[
          styles.centerRow,
          { justifyContent: "center", marginBottom: 32 },
        ]}
      >
        <Text>Don't have an account?</Text>
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
  tooltipTextSettings: {
    fontFamily: "THICCCBOI_ExtraBold",
  },
  helpBalloon: {
    marginBottom: "auto",
    marginHorizontal: 10,
  },
  dismissButton: {
    backgroundColor: "#6763761A",
  },
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
    marginTop: 135,
    marginBottom: 16,
    width: "100%",
    paddingHorizontal: 60,
  },
  centerRow: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
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
