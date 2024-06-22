/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const firstCharToUpperCase = require("../firstCharToUpperCase");

module.exports = (layerName, sliceName) => {
	return `
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import ${firstCharToUpperCase(sliceName)} from "./${firstCharToUpperCase(sliceName)}";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta: Meta<typeof ${firstCharToUpperCase(sliceName)}> = {
	title: "${layerName}/${firstCharToUpperCase(sliceName)}",
	component: ${firstCharToUpperCase(sliceName)},
	decorators: [
		StoreDecorator({}),
	],
};

export default meta;

type Story = StoryObj<typeof ${firstCharToUpperCase(sliceName)}>;

export const Default: Story = {
	render: (args) => <${firstCharToUpperCase(sliceName)} {...args} />,
};

export const Dark: Story = {
	render: (args) => <${firstCharToUpperCase(sliceName)} {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <${firstCharToUpperCase(sliceName)} {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)]
};
`;
};