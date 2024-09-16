import type { Meta, StoryObj } from "@storybook/react";
import ListBox from "./ListBox";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";
import { setFeatureFlags } from "@/shared/lib/features/setAndGetFeatureFlags";

setFeatureFlags({
	isAppRedesigned: true
});

const meta: Meta<typeof ListBox> = {
	title: "shared/ListBox",
	component: ListBox,
	args: {
		options: [
			{
				value: "KGS",
				content: "KGSasdasdasasdsad"
			},
			{
				value: "USD",
				content: "USd"
			},
			{
				value: "RUB",
				content: "RUB"
			},
		],
		value: "USD"
	},
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Light: Story = {
	render: (args) => <ListBox {...args}/>,
	decorators: [
		(Story) => <div style={{background: "#e6e6e6", height: "100vh"}}><Story /></div>,
		ThemeDecorator(Theme.LIGHT)
	]
};

export const Dark: Story = {
	render: (args) => <ListBox {...args}/>,
	decorators: [
		(Story) => <div style={{background: "#e6e6e6", height: "100vh"}}><Story /></div>,
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	}
};
