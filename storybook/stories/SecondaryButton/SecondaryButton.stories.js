import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import SecondaryButton from ".";
import CenterView from "../CenterView";

storiesOf("SecondaryButton", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("with text", () => (
    <SecondaryButton
      onPress={action("clicked-text")}
      text="Hello2"
    ></SecondaryButton>
  ));
