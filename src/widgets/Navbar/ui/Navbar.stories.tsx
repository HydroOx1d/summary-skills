import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./Navbar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";

const meta: Meta<typeof Navbar> = {
	title: "widgets/Navbar",
	component: Navbar,
	decorators: [
		StoreDecorator({

		})
	]
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
	render: () => <Navbar />,
};

export const Dark: Story = {
	render: () => <Navbar />,
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const Authorized: Story = {
	render: () => <Navbar/>,
	decorators: [
		StoreDecorator({
			user: {
				authData: {}
			}
		})
	]
};