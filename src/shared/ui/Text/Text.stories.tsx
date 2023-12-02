import type { Meta, StoryObj } from "@storybook/react";
import Text, { TextTheme } from "./Text";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Text> = {
	title: "shared/Text",
	component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
	render: (args) => <Text {...args} />,
	args: {
		title: "This is a title",
		text: "And this is a text",
	},
};

export const Error: Story = {
	render: (args) => <Text {...args} />,
	args: {
		title: "This is a title",
		text: "And this is a text",
		theme: TextTheme.ERROR
	},
};

export const ErrorDark: Story = {
	render: (args) => <Text {...args} />,
	args: {
		title: "This is a title",
		text: "And this is a text",
		theme: TextTheme.ERROR,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitle: Story = {
	render: (args) => <Text {...args} />,
	args: {
		title: "Only title"
	}
};

export const OnlyText: Story = {
	render: (args) => <Text {...args} />,
	args: {
		text: "Only text",
	},
};

export const DefaultDark: Story = {
	render: (args) => <Text {...args} />,
	args: {
		title: "This is a title",
		text: "And this is a text",
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const OnlyTitleDark: Story = {
	render: (args) => <Text {...args} />,
	args: {
		title: "Only title",
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const OnlyTextDark: Story = {
	render: (args) => <Text {...args} />,
	args: {
		text: "Only text",
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};