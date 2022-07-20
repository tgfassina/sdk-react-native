import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  children: React.ReactNode;
};

export const ContainerHeader: React.FC<Props> = (props) => {
  return <View style={styles.header}>{props.children}</View>;
};

export const ContainerContent: React.FC<Props> = (props) => {
  return <View style={styles.content}>{props.children}</View>;
};

export const ContainerFooter: React.FC<Props> = (props) => {
  return <View style={styles.footer}>{props.children}</View>;
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
    zIndex: 2,
  },
});
