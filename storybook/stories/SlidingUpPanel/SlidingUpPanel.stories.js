import { storiesOf } from "@storybook/react-native";
import React from "react";
import SlidingUpPanel from ".";
import CenterView from "../CenterView";

let panelRef = null;

storiesOf("SlidingUpPanel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => {
    return (
      <>
        <SlidingUpPanel></SlidingUpPanel>
      </>
    );
  });
