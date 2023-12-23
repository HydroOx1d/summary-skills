import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Select> = {
	title: "shared/Select",
	component: Select,
	args: {
		options: [
			{
				value: "First value",
				content: "First content",
			},
			{
				value: "Second value",
				content: "Second content",
			},
		],
	},
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: (args) => <Select {...args} />,
};