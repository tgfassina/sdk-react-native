import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import SecondaryButton from ".";
import CenterViewDark from "../CenterViewDark";

storiesOf("SecondaryButton", module)
	.addDecorator((getStory) => <CenterViewDark>{getStory()}</CenterViewDark>)
	.add("with text", () => (
		<SecondaryButton onPress={action("clicked-text")} text="Hello2" />
	));
