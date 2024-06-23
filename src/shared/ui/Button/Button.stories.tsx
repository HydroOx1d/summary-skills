import type {Meta, StoryObj} from "@storybook/react";
import Button, { ButtonTheme, SizesButton } from "./Button";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

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

export const ClearInverted: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		children: "Button Clear",
		theme: ButtonTheme.CLEAR_INVERTED,
	},
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outline: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.OUTLINE
	}
};

export const OutlineSizeL: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.OUTLINE,
		size: SizesButton.L
	},
};

export const OutlineSizeXL: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.OUTLINE,
		size: SizesButton.XL,
	},
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

export const Background: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInverted: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true
	},
};

export const SquareSizeM: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: SizesButton.M
	},
};

export const SquareSizeL: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: SizesButton.L,
	},
};

export const SquareSizeXL: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		children: ">",
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: SizesButton.XL,
	},
};