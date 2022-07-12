import { storiesOf } from "@storybook/react-native";
import React from "react";
import Widget from "../../../src/Widget";

storiesOf("App Showcase", module).add("show app", () => (
  <Widget onSuccess={(payload) => alert(JSON.stringify(payload))} />
));
