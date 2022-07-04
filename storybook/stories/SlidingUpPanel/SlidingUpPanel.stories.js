import { storiesOf } from "@storybook/react-native";
import React from "react";
import SlidingUpPanel from ".";
import SlidingUpWelcome from "./unrecognizedDevice/Welcome";
import SlidingUpRecognizedWelcome from "./recognizedDevice/Welcome";
import CenterView from "../CenterView";
import { number } from "@storybook/addon-knobs";

storiesOf("SlidingUpPanel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Show welcome for unrecognized device", () => {
    return (
      <>
        <SlidingUpPanel show={number("Enabled", 320)}>
          <SlidingUpWelcome />
        </SlidingUpPanel>
      </>
    );
  })
  .add("Dont Show", () => {
    return (
      <>
        <SlidingUpPanel show={number("Disabled", 0)}></SlidingUpPanel>
      </>
    );
  })
  .add("Show welcome for recognized device", () => {
    return (
      <>
        <SlidingUpPanel show={number("Enabled", 640)}>
          <SlidingUpRecognizedWelcome />
        </SlidingUpPanel>
      </>
    );
  });
