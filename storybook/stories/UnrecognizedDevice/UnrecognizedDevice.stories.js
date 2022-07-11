import { storiesOf } from "@storybook/react-native";
import React from "react";
import AuthenticateDevice from "../../../src/AuthenticateDevice";
import ChooseDevice from "../../../src/ChooseDevice";
import CenterViewDark from "../CenterViewDark";
import GlobalContext from "../../../src/globalContext";
import SlidingUpPanel from "../../../src/components/SlidingUpPanelComponent";
import ScanCodeCamera from "../../../src/ScanCodeCamera";

storiesOf("Unrecognized Device", module)
  .addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
  .add("Authenticate Device", () => (
    <GlobalContext>
      <SlidingUpPanel storybook={true}>
        <AuthenticateDevice />
      </SlidingUpPanel>
    </GlobalContext>
  ))
  .add("Choose nearby Device", () => (
    <GlobalContext>
      <SlidingUpPanel storybook={true}>
        <ChooseDevice />
      </SlidingUpPanel>
    </GlobalContext>
  ))
  .add("Open User Device tab", () => (
    <GlobalContext>
      <SlidingUpPanel storybook={true}>
        <ScanCodeCamera />
      </SlidingUpPanel>
    </GlobalContext>
  ));
