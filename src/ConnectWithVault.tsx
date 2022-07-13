import React, { useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SonrLogo from "./icons/SonrLogo";
import HelpBalloon from "./icons/HelpBalloon";
import BackButton from "./icons/BackButton";
import FieldWithIcon from "./components/FieldWithIcon";
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import { AuthenticationContext } from "./AuthenticationContext";
import { ContainerLight } from "./components/ContainerLight";
import Motor from "./sandbox";

type Props = {
  username: string;
};
const ConnectWithVault: React.FC<Props> = (props: Props) => {
  const authenticationContext = useContext(AuthenticationContext);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onSubmit = async () => {
    const userData = await Motor.login(props.username, password);

    if (!userData) {
      setError(true);
      return;
    }

    authenticationContext.onSuccess(userData);
    authenticationContext.close();
  };

  return (
    <ContainerLight>
      <View style={styles.header}>
        <SonrLogo textFill="#1D1A27" />
      </View>

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => authenticationContext.navigate("PromptRecognized", {})}
        >
          <BackButton />
        </TouchableOpacity>

        <View style={{ marginBottom: 48 }}>
          <Text style={styles.subtitle2}>Connect with Vault</Text>
          <Text style={styles.subtitle3}>Enter your Vault Password</Text>
        </View>

        <FieldWithIcon
          label="Vault Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          icon="security"
          lightTheme={true}
        />
        {error && <Text style={styles.errorMessage}>Invalid password</Text>}

        {false && (
          <View style={styles.tooltipStyle}>
            <HelpBalloon style={styles.helpBalloon} />
            <View>
              <Text style={styles.tooltipText}>
                It looks like you may have forgotten your Vault Password. Please
                try logging in on a recognized device. You can reset your Vault
                Password in&nbsp;
                <Text style={styles.tooltipTextSettings}>Settings</Text>
              </Text>
              <SecondaryButton onPress={() => {}} text="Dismiss" />
            </View>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <PrimaryButton onPress={onSubmit} text="Submit" />
      </View>
    </ContainerLight>
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
    alignItems: "stretch",
  },
  backButton: {
    backgroundColor: "#6763761A",
    position: "absolute",
    width: 32,
    height: 32,
    left: 16,
    top: 20,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  errorMessage: {
    color: "#CC154A",
    fontFamily: "THICCCBOI_Medium",
    fontSize: 12,
    padding: 4,
  },
  tooltipTextSettings: {
    fontFamily: "THICCCBOI_ExtraBold",
  },
  helpBalloon: {
    marginBottom: "auto",
    marginHorizontal: 10,
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
  close: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontStyle: "normal",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.02,
    color: "#AEACB8",
  },
  subtitle2: {
    fontFamily: "THICCCBOI_ExtraBold",
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    color: "#1D1A27",
  },
  subtitle3: {
    fontFamily: "THICCCBOI_Bold",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#676376",
    marginTop: 8,
    textTransform: "uppercase",
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
