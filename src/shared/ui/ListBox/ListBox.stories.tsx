import type { Meta, StoryObj } from "@storybook/react";
import ListBox from "./ListBox";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof ListBox> = {
	title: "shared/ListBox",
	component: ListBox,
	args: {
		options: [
			{
				value: "USD",
				content: "USd"
			},
			{
				value: "RUB",
				content: "RUB"
			},
			{
				value: "KGS",
				content: "KGS"
			}
		],
		value: "USD"
	},
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Default: Story = {
	render: (args) => <ListBox {...args}/>,
};

export const Dark: Story = {
	render: (args) => <ListBox {...args}/>,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <ListBox {...args}/>,
	decorators: [ThemeDecorator(Theme.BLUE)]
};