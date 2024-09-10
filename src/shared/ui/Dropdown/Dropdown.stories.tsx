import type {Meta, StoryObj} from "@storybook/react";
import Dropdown from "./Dropdown";
import Button from "../deprecated/Button/Button";
import { setFeatureFlags } from "@/shared/lib/features/setAndGetFeatureFlags";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator";
import { Theme } from "@/shared/constants/theme";

setFeatureFlags({
	isAppRedesigned: true
});

const meta: Meta<typeof Dropdown> = {
	title: "shared/Dropdown",
	component: Dropdown,
	args: {
		trigger: <Button>Кнопка</Button>,
		items: [
			{
				content: "Первый"
			},
			{
				content: "Второй"
			},
			{
				content: "Третий (это уже ссылка)",
				href: "https://google.com"
			}
		]
	},
	decorators: [
		(Story) => (
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					minHeight: "100vh",
				}}
			>
				<Story/>
			</div>
		),
		ThemeDecorator(Theme.LIGHT)

	]
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
	render: (args) => <Dropdown {...args}/>
};

export const BottomRight: Story = {
	render: (args) => <Dropdown {...args}/>,
	args: {
		direction: "bottom right"
	}
};
export const TopLeft: Story = {
	render: (args) => <Dropdown {...args}/>,
	args: {
		direction: "top left"
	}
};
export const TopRight: Story = {
	render: (args) => <Dropdown {...args}/>,
	args: {
		direction: "top right"
	}
};