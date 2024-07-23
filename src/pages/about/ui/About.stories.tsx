import type { Meta, StoryObj } from "@storybook/react";
import About from "./About";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof About> = {
	title: "pages/About",
	component: About,
	decorators: [
		StoreDecorator({})
	]
};

export default meta;

type Story = StoryObj<typeof About>;

export const Light: Story = {
	render: () => <About />,
};

export const Dark: Story = {
	render: () => <About />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
