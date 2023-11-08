import type {Meta, StoryObj} from "@storybook/react";
import Button, { ButtonTheme } from "./Button";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof Button> = {
	title: "shared/Button",
	component: Button,
	args: {
		children: "Button",
	},
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	render: (args) => <Button>{args.children}</Button>
};

export const Clear: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		children: "Button Clear",
		theme: ButtonTheme.CLEAR
	}
};

export const Outline: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.OUTLINE
	}
};

export const OutlineDark: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.OUTLINE
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};