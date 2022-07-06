import { storiesOf } from "@storybook/react-native";
import React from "react";
import SlidingUpPanel from ".";
import SlidingUpWelcome from "./unrecognizedDevice/Welcome";
import SlidingUpRecognizedWelcome from "./recognizedDevice/Welcome";
import CenterView from "../CenterView";
import { number } from "@storybook/addon-knobs";
import ConnectWithVault from "./recognizedDevice/ConnectWithVault";

storiesOf("SlidingUpPanel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Unrecognized device - Show welcome", () => {
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
  .add("1-Recognized device - welcome", () => {
    return (
      <>
        <SlidingUpPanel show={number("Enabled", 640)}>
          <SlidingUpRecognizedWelcome />
        </SlidingUpPanel>
      </>
    );
  })
  .add("2-Recognized device - connect vault", () => {
    return (
      <>
        <SlidingUpPanel show={number("Enabled", 640)}>
          <ConnectWithVault />
        </SlidingUpPanel>
      </>
    );
  })
  .add("3-Recognized device - failed password", () => {
    return (
      <>
        <SlidingUpPanel show={number("Enabled", 640)}>
          <ConnectWithVault
            warningMessage="Invalid Password"
            displayTooltip={true}
          />
        </SlidingUpPanel>
      </>
    );
  });
