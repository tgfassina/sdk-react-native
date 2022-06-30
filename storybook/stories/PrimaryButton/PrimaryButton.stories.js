import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import PrimaryButton from ".";
import CenterView from "../CenterView";

storiesOf("PrimaryButton", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <PrimaryButton
      onPress={action("clicked-text")}
      text="Hello"
    ></PrimaryButton>
  ));
