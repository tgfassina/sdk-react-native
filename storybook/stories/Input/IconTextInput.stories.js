import { storiesOf } from "@storybook/react-native";
import React from "react";
import CenterViewDark from "../CenterViewDark";
import IconText from "../../../src/components/FieldWithIcon";
import { text } from "@storybook/addon-knobs";

storiesOf("Main text input", module)
  .addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
  .add("Failed State", () => (
    <IconText
      label="Vault Password"
      labelStyle={{ color: "#4F4A60", marginBottom: 8 }}
      textInputStyle={{ color: "#4F4A60" }}
      text={text("test", "test input")}
      onChangeText={() => ""}
      icon="SecuritySafe"
      warning="Input failed"
    />
  ));
