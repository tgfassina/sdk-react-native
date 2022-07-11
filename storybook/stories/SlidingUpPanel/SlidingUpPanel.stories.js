import { storiesOf } from "@storybook/react-native";
import React from "react";
import SlidingUpPanel from "../../../src/components/SlidingUpPanelComponent";
import SlidingUpWelcome from "../../../src/PromptUnrecognized";
import SlidingUpRecognizedWelcome from "../../../src/PromptRecognized";
import CenterView from "../CenterView";
import ConnectWithVault from "../../../src/ConnectWithVault";
import GlobalContext from "../../../src/globalContext";

storiesOf("SlidingUpPanel", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Unrecognized device - Show welcome", () => {
    return (
      <GlobalContext>
        <SlidingUpPanel storybook={true}>
          <SlidingUpWelcome />
        </SlidingUpPanel>
      </GlobalContext>
    );
  })
  .add("1-Recognized device - welcome", () => {
    return (
      <GlobalContext>
        <SlidingUpPanel>
          <SlidingUpRecognizedWelcome />
        </SlidingUpPanel>
      </GlobalContext>
    );
  })
  .add("2-Recognized device - connect vault", () => {
    return (
      <GlobalContext>
        <SlidingUpPanel storybook={true}>
          <ConnectWithVault />
        </SlidingUpPanel>
      </GlobalContext>
    );
  })
  .add("3-Recognized device - failed password", () => {
    return (
      <GlobalContext>
        <SlidingUpPanel storybook={true}>
          <ConnectWithVault
            warningMessage="Invalid Password"
            displayTooltip={true}
          />
        </SlidingUpPanel>
      </GlobalContext>
    );
  });
