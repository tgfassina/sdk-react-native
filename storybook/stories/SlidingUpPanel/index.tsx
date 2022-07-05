import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import SlidingUpPanel from "rn-sliding-up-panel";

type Props = {
  show: number;
  children: any;
  createButtonHandler?: any;
  secureButtonHandler?: any;
  skipButtonHandler?: any;
};

const SlidingUpPanelComponent = (props: Props) => {
  const slideRef = useRef(null);
  useEffect(() => {
    if (props.show > 0) {
      slideRef.current.show(props.show);
    } else {
      slideRef.current.hide();
    }
  }, [props.show]);
  return <SlidingUpPanel ref={slideRef}>{props.children}</SlidingUpPanel>;
};

export default SlidingUpPanelComponent;
