import type { Meta, StoryObj } from "@storybook/react";
import ProfileCard from "./ProfileCard";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { Country } from "@/entity/Country";
import { Currency } from "@/entity/Currency";
import Avatar from "@/shared/assets/tests/storybook-avatar.jpg";

const meta: Meta<typeof ProfileCard> = {
	title: "entity/ProfileCard",
	component: ProfileCard,
	args: {
		data: {
			name: "Nurs",
			surname: "Nurs",
			age: 18,
			city: "asd",
			username: "username",
			country: Country.AMERICA,
			currency: Currency.EUR,
			avatar: Avatar
		}
	},
	decorators: [
		StoreDecorator({
		})
	]
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
	render: (args) => <ProfileCard {...args} />,
};

export const Loading: Story = {
	render: (args) => <ProfileCard {...args} />,
	args: {
		isLoading: true
	}
};

export const Error: Story = {
	render: (args) => <ProfileCard {...args} />,
	args: {
		error: "Error"
	}
};


export const Light: Story = {
	render: (args) => <ProfileCard {...args} />,
	decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const Dark: Story = {
	render: (args) => <ProfileCard {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
