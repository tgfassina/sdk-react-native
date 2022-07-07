import { storiesOf } from "@storybook/react-native";
import React from "react";
import MainApp from ".";
import CenterViewDark from "../CenterViewDark";

storiesOf("App Showcase", module)
  .addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
  .add("show app", () => <MainApp />);
