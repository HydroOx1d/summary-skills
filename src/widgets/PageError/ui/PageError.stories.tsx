import type { Meta, StoryObj } from "@storybook/react";
import PageError from "./PageError";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

const meta: Meta<typeof PageError> = {
	title: "widgets/PageError",
	component: PageError,
};

export default meta;

type Story = StoryObj<typeof PageError>;

export const Light: Story = {
	render: () => <PageError />,
};

export const Dark: Story = {
	render: () => <PageError />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
