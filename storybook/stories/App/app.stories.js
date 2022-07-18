import { storiesOf } from "@storybook/react-native";
import React from "react";
import AuthenticationComponent from "../../../src/AuthenticationComponent";

storiesOf("App Showcase", module).add("show app", () => (
  <AuthenticationComponent
    onSuccess={(payload) => alert(JSON.stringify(payload))}
  />
));
