import { storiesOf } from "@storybook/react-native";
import React from "react";
import PrimaryButton from "../../../src/components/PrimaryButton";
import CenterViewDark from "../CenterViewDark";

storiesOf("PrimaryButton", module)
  .addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
  .add("button with text", () => (
    <PrimaryButton onPress={() => {}} text="Hello" />
  ));
