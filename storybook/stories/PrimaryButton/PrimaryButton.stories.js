import { storiesOf } from "@storybook/react-native";
import React from "react";
import PrimaryButton from ".";
import CenterViewDark from "../CenterViewDark";

storiesOf("PrimaryButton", module)
	.addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
	.add("with text", () => <PrimaryButton onPress={() => {}} text="Hello" />);
