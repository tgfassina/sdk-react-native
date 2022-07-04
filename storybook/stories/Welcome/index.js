import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import sonrLogo from '../SlidingUpPanel/sonr.png';

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
        <Text style={styles.header}>Welcome to SDK React Native Storybook</Text>
        <Image source={sonrLogo} style={styles.sonrLogo} />
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
    backgroundColor: "#000",
  },
  header: {
    fontSize: 18,
    marginBottom: 18,
    textAlign: "center",
    color: "#FFF",
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
  sonrLogo: {
    height: 62,
    width: 182,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
