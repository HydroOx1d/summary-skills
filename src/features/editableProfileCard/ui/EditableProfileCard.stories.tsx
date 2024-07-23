
import type { Meta, StoryObj } from "@storybook/react";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import EditableProfileCard from "./EditableProfileCard";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

const meta: Meta<typeof EditableProfileCard> = {
	title: "features/EditableProfileCard",
	component: EditableProfileCard,
	decorators: [
		StoreDecorator({}),
	],
};

export default meta;

type Story = StoryObj<typeof EditableProfileCard>;

export const Default: Story = {
	render: (args) => <EditableProfileCard {...args} />,
};

export const Dark: Story = {
	render: (args) => <EditableProfileCard {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)]
};

export const Blue: Story = {
	render: (args) => <EditableProfileCard {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)]
};
