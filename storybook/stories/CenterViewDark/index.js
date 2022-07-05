import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import style from "./style";

export default function CenterViewDark({ children }) {
  return <View style={style.main}>{children}</View>;
}

CenterViewDark.defaultProps = {
  children: null,
};

CenterViewDark.propTypes = {
  children: PropTypes.node,
};
