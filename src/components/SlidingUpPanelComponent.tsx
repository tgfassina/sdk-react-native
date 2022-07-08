import React, { useContext, useEffect, useRef } from "react";
import SlidingUpPanel from "rn-sliding-up-panel";
import { AppContext } from "../../context/context";

type Props = {
  children?: any;
  storybook?: boolean;
};

const SlidingUpPanelComponent = (props: Props) => {
  const context = useContext(AppContext);
  const slideRef = useRef(null);
  useEffect(() => {
    if (context.show > 0) {
      slideRef.current.show(context.show);
    } else {
      slideRef.current.hide();
    }
  }, [context.show]);
  return (
    <SlidingUpPanel ref={slideRef}>
      {props.storybook ? props.children : context.component}
    </SlidingUpPanel>
  );
};

export default SlidingUpPanelComponent;
