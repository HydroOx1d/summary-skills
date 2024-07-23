import type { Meta, StoryObj } from "@storybook/react";
import Loader from "./Loader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof Loader> = {
	title: "shared/Loader",
	component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
	render: () => <Loader/>,
};

export const Dark: Story = {
	render: () => <Loader />,
	decorators: [
		ThemeDecorator(Theme.DARK)
	]
};