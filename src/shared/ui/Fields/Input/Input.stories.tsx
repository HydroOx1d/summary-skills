import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { setFeatureFlags } from "@/shared/lib/features/setAndGetFeatureFlags";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";
import SearchIcon from "@/shared/assets/icons/icon-search.svg";

const meta: Meta<typeof Input> = {
	title: "shared/Input",
	component: Input,
	args: {
		placeholder: "Placeholder"
	},
};

setFeatureFlags({
	isAppRedesigned: true
});

export default meta;

type Story = StoryObj<typeof Input>;

export const Light: Story = {
	render: (args) => <Input {...args}/>,
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
};

export const Dark: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	}
};

export const WithPrefix: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
	args: {
		prefix: <SearchIcon/>
	}
};

export const WithPrefixDark: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	},
	args: {
		prefix: <SearchIcon/>
	}
};

export const WithSuffix: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
	args: {
		suffix: <SearchIcon/>
	}
};

export const WithSuffixDark: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	},
	args: {
		suffix: <SearchIcon/>
	}
};

export const WithPrefixAndSuffix: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.LIGHT)
	],
	args: {
		suffix: <SearchIcon/>,
		prefix: <SearchIcon/>,
	}
};

export const WithPrefixAndSuffixDark: Story = {
	render: (args) => <Input {...args} />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	],
	parameters: {
		themes: {
			default: "dark"
		}
	},
	args: {
		suffix: <SearchIcon/>,
		prefix: <SearchIcon/>,
	}
};