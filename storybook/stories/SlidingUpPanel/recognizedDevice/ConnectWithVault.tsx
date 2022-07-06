import React, { Dispatch, SetStateAction } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SonrLogo from "../../icons/SonrLogo";
import HelpBallon from "../../icons/HelpBallon";
import VaultPassword from "../../Input/IconText";
import PrimaryButton from "../../PrimaryButton";
import BackButton from "../../icons/BackButton";
import SecondaryButton from "../../SecondaryButton";

type Props = {
  submitButtonHandler?: () => any;
  vaultPasswordHandler?: () => any;
  createAccountHandler?: () => any;
  closeHandler?: () => any;
  warningMessage?: string;
  displayTooltip?: boolean;
  setDisplayTooltip?: Dispatch<SetStateAction<boolean>>;
};

const ConnectWithVault: React.FC<Props> = (props: Props) => {
  const [walletAddressInput, setWalletAddressInput] = React.useState("");

  return (
    <View style={styles.slidePanel}>
      <View style={[styles.header, styles.centerRow]}>
        <SonrLogo textFill="#1D1A27" />
        <Text style={styles.close} onPress={() => props.closeHandler()}>
          Close
        </Text>
      </View>
      <Text style={styles.subtitle2}>Connect with Vault</Text>
      <Text style={styles.subtitle3}>ENTER YOUR VAULT PASSWORD</Text>

      <TouchableOpacity style={styles.backButton}>
        <BackButton />
      </TouchableOpacity>

      <VaultPassword
        label="Vault Password"
        text={walletAddressInput}
        onChangeText={setWalletAddressInput}
        secureTextEntry={true}
        labelStyle={{ color: "#4F4A60", marginBottom: 8 }}
        inputStyle={styles.vaultInputStyle}
        icon="security"
        textInputStyle={{ color: "#37324A" }}
        warning={props.warningMessage}
      />

      {props.displayTooltip && (
        <View style={styles.tooltipStyle}>
          <HelpBallon style={styles.helpBallon} />
          <View>
            <Text numberOfLines={5} style={styles.tooltipText}>
              It looks like you may have forgotten your Vault Password. Please
              try logging in on a recognized device. You can reset your Vault
              Password in{" "}
              <Text style={styles.tooltipTextSettings}>Settings</Text>
            </Text>
            <SecondaryButton
              onPress={() => props.setDisplayTooltip(!props.displayTooltip)}
              text="Dismiss"
              style={styles.dismissButton}
              textStyle={{ color: "#37324A", fontWeight: "800" }}
            />
          </View>
        </View>
      )}

      <PrimaryButton
        style={styles.submitButton}
        onPress={() => props.submitButtonHandler}
        text="Submit"
        disabled={walletAddressInput.length < 1}
      />

      <View
        style={[
          styles.centerRow,
          { justifyContent: "center", marginBottom: 32 },
        ]}
      >
        <Text>Don't have an account?</Text>
        <Text
          onPress={() => props.createAccountHandler()}
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
    fontWeight: "800",
    fontFamily: "THICCCBOI_ExtraBold",
  },
  helpBallon: {
    marginBottom: "auto",
    marginTop: 30,
    marginHorizontal: 10,
  },
  dismissButton: {
    backgroundColor: "#6763761A",
  },
  tooltipText: {
    width: 215,
    height: 80,
    fontSize: 12,
    lineHeight: 16,
    fontFamily: "THICCCBOI_Regular",
  },
  tooltipStyle: {
    flexDirection: "row",
    width: 280,
    height: 160,
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
    marginTop: "auto",
    marginBottom: 16,
    width: 280,
    height: 48,
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
    fontWeight: "800",
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
    fontWeight: "900",
    lineHeight: 28,
    textAlign: "center",
    color: "#1D1A27",
    marginTop: 24,
  },
  subtitle3: {
    fontFamily: "THICCCBOI_Bold",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 20,
    textAlign: "center",
    color: "#676376",
    marginTop: 8,
    marginBottom: 48,
  },
  createAccount: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 14,
    fontWeight: "800",
    lineHeight: 16,
    color: "#1792FF",
    marginLeft: 8,
  },
  vaultInputStyle: {
    borderColor: "#9893A2",
    width: 256,
    height: 40,
  },
});

export default ConnectWithVault;
