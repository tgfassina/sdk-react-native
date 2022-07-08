import PropTypes from "prop-types";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SonrLogo from "../../../src/icons/SonrLogo";

export default class Welcome extends React.Component {
  showApp = (event) => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <SonrLogo />
        <Text style={styles.header}>Welcome to SDK React Native Storybook</Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  header: {
    fontSize: 18,
    marginVertical: 18,
    textAlign: "center",
    color: "#FFF",
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
});
