import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Text> = {
	title: "shared/TextRedesigned",
	component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text"
	},
};

export const Accent: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		variant: "accent"
	},
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};

export const SizeXS: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		size: "xs"
	}
};

export const SizeSM: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		size: "sm"
	}
};

export const SizeBase: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		size: "base"
	}
};

export const SizeXL: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		size: "xl"
	}
};

export const WithH1Tag: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		tag: "h1"
	}
};

export const WithH2Tag: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		tag: "h2"
	}
};

export const WithPTag: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		tag: "p"
	}
};

export const WithSpanTag: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
		tag: "span"
	}
};

export const WithDefaultTag: Story = {
	render: (args) => <Text {...args} />,
	args: {
		children: "Text",
	}
};