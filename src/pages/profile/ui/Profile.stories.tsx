import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { Country } from "@/entity/Country";
import { Currency } from "@/entity/Currency";
import Avatar from "@/shared/assets/tests/storybook-avatar.jpg";

const meta: Meta<typeof Profile> = {
	title: "pages/Profile",
	component: Profile,
	decorators: [
		StoreDecorator({
			profile: {
				data: {
					name: "Nurs",
					surname: "Nurs",
					age: 18,
					city: "asd",
					username: "username",
					country: Country.AMERICA,
					currency: Currency.EUR,
					avatar: Avatar,
				},
				form: {
					name: "Nurs",
					surname: "Nurs",
					age: 18,
					city: "asd",
					username: "username",
					country: Country.AMERICA,
					currency: Currency.EUR,
					avatar: Avatar,
				},
				readonly: true,
			},
		}),
	],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Light: Story = {
	render: () => <Profile />,
};

export const Dark: Story = {
	render: () => <Profile />,
	decorators: [ThemeDecorator(Theme.DARK)],
};
