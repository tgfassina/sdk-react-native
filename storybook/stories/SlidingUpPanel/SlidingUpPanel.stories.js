import { storiesOf } from "@storybook/react-native";
import React from "react";
import SlidingUpPanel from ".";
import CenterView from "../CenterView";
import { boolean } from "@storybook/addon-knobs";

storiesOf("SlidingUpPanel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Show enabled", () => {
    return (
      <>
        <SlidingUpPanel show={boolean("Enabled", true)}></SlidingUpPanel>
      </>
    );
  })
  .add("Show disabled", () => {
    return (
      <>
        <SlidingUpPanel show={boolean("Disabled", false)}></SlidingUpPanel>
      </>
    );
  });
