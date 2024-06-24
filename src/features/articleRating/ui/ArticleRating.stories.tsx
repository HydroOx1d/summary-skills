import type { Meta, StoryObj } from "@storybook/react";
import ArticleRating from "./ArticleRating";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator";
import { http, HttpResponse } from "msw";

const meta: Meta<typeof ArticleRating> = {
	title: "features/ArticleRating",
	component: ArticleRating,
	args: {
		articleId: "1"
	},
	decorators: [
		StoreDecorator({
			user: {
				authData: {
					id: "1"
				}
			}
		})
	]
};

export default meta;

type Story = StoryObj<typeof ArticleRating>;

export const Default: Story = {
	render: (args) => <ArticleRating {...args}/>,
	parameters: {
		msw: {
			handlers: [
				http.get("/articles-rating?articleId=1&userId=1", () => {
					return HttpResponse.json([{
						"id": 1,
						"rate": 4,
						"articleId": "1",
						"userId": "1"
					}]);	
				}),
			],
		},
	}
};

export const WithoutRate: Story = {
	render: (args) => <ArticleRating {...args}/>,
	parameters: {
		msw: {
			handlers: [
				http.get("/articles-rating?articleId=1&userId=1", () => {
					return HttpResponse.json([]);	
				}),
			],
		},
	}
};