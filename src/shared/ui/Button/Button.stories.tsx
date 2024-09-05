import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { setFeatureFlags } from "@/shared/lib/features/setAndGetFeatureFlags";

const meta: Meta<typeof Button> = {
	title: "shared/ButtonRedesigned",
	component: Button,
	args: {
		children: "Button",
	}
};

export default meta;

type Story = StoryObj<typeof Button>;

setFeatureFlags({
	isAppRedesigned: true
});

export const Primary: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		variant: "primary"
	},
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
};

export const PrimaryDark: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		variant: "primary"
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	}
};

export const Secondary: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
};

export const SecondaryDark: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	}
};

export const Tertiary: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		variant: "tertiary"
	},
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
};

export const TertiaryDark: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		variant: "tertiary"
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	}
};

export const PrimaryLarge: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		size: "large"
	}
};

export const SecondaryLarge: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		variant: "primary",
		size: "large"
	}
};

export const TertiaryLarge: Story = {
	render: (args) => <Button {...args}>{args.children}</Button>,
	args: {
		variant: "tertiary",
		size: "large"
	}
};
