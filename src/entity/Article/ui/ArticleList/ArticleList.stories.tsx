import type { Meta, StoryObj } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import ArticleList from "./ArticleList";
import { ArticleViewWay } from "../../model/types/article";

const articles = [
	{
		id: "1",
		title: "Javascript новости",
		subtitle: "Что такое JavaScript?",
		firstImage:
      "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
		views: 122,
		createdAt: "26.02.2022",
		type: [
			"IT",
			"SCIENCE",
			"SCIENCE",
			"SCIENCE",
			"SCIENCE",
			"SCIENCE",
			"SCIENCE",
		],
		user: {
			id: "1",
			avatar:
        "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
			username: "Ox1d",
		},
		preview:
      "JavaScript – это язык программирования, который используют разработчики для создания интерактивных веб-страниц. Функции JavaScript могут улучшить удобство взаимодействия пользователя с веб-сайтом: от обновления ленты новостей в социальных сетях и до отображения анимации и интерактивных карт. JavaScript является языком программирования при разработки скриптов для выполнения на стороне клиента, что делает его одной из базовых технологий во всемирной сети Интернет. Например, карусель изображения, выпадающее по клику меню и динамично меняющиеся цвета элементов на веб-странице, которые вы видите во время просмотра страниц в Интернете, выполнены при помощи JavaScript.",
		content:
      "# JavaScript: Язык программирования для веб-разработки\n\nJavaScript - это высокоуровневый, интерпретируемый язык программирования, который изначально создавался для обеспечения интерактивности на веб-сайтах. С появлением языка, в 1995 году, он претерпел значительное развитие и стал неотъемлемой частью веб-технологий.\n\n## Основные характеристики JavaScript\n\n### Простота в изучении\n\nJavaScript отличается относительной простотой в изучении, что делает его доступным для новичков. Его синтаксис легко читаем и схож с другими языками программирования.\n\n### Интерпретируемость\n\nJavaScript является интерпретируемым языком, что позволяет выполнять код непосредственно в процессе работы программы, без предварительной компиляции. Это упрощает процесс разработки и отладки.\n\n### Объектно-ориентированный подход\n\nJavaScript является объектно-ориентированным языком, что позволяет разработчикам создавать и манипулировать объектами для построения сложных структур данных и приложений.\n\n### Поддержка браузерами\n\nJavaScript поддерживается всеми современными браузерами, что обеспечивает его широкое использование в веб-разработке. Это позволяет создавать современные и интерактивные веб-приложения.\n\n```javascript\n// Пример простого кода на JavaScript\nfunction greet(name) {\n  console.log(\"Привет, \" + name + \"!\");\n}\n\n// Вызываем функцию с аргументом\ngreet(\"Мир\");\n```\n\n## Основные возможности JavaScript\n\n### Динамическая типизация\n\nJavaScript обладает динамической типизацией, что позволяет переменным изменять свой тип данных в процессе выполнения программы. Это придает гибкость при написании кода.\n\n### Событийно-ориентированное программирование\n\nJavaScript активно используется для обработки событий, таких как клики мыши, нажатия клавиш и другие. Это делает возможным создание интерактивных пользовательских интерфейсов.\n\n### AJAX (Asynchronous JavaScript and XML)\n\nJavaScript позволяет создавать асинхронные запросы к серверу без перезагрузки страницы, улучшая производительность и пользовательский опыт.\n\n### Библиотеки и фреймворки\n\nСуществует множество библиотек и фреймворков JavaScript, таких как React, Angular и Vue.js, которые облегчают разработку сложных веб-приложений, предоставляя готовые компоненты и инструменты.\n\n## Эволюция JavaScript\n\nJavaScript постоянно развивается, и его стандарты обновляются регулярно. ES6 (ECMAScript 2015) внес значительные изменения и добавил новые возможности, такие как стрелочные функции, классы, шаблонные строки и деструктуризация.\n\nС появлением новых стандартов, разработчики могут использовать современные возможности языка, что способствует улучшению читаемости кода и повышению производительности.\n\n## Заключение\n\nJavaScript играет ключевую роль в мире веб-разработки, обеспечивая создание динамичных и интерактивных веб-сайтов. Благодаря своей простоте в изучении, поддержке браузерами и активному сообществу разработчиков, JavaScript остается одним из самых популярных языков программирования.",
	},
];

const meta: Meta<typeof ArticleList> = {
	title: "entity/ArticleList",
	component: ArticleList,
	decorators: [StoreDecorator({})],
	args: {
		articles: [...new Array(16)].map((_, index) => {
			return {
				...articles[0],
				id: String(index),
			};
		}),
		view: ArticleViewWay.CARDS,
	},
};

export default meta;

type Story = StoryObj<typeof ArticleList>;

export const Default: Story = {
	render: (args) => <ArticleList {...args} />,
};

export const ViewList: Story = {
	render: (args) => <ArticleList {...args} />,
	args: {
		view: ArticleViewWay.LIST
	}
};

export const Dark: Story = {
	render: (args) => <ArticleList {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)],
};

export const ViewListDark: Story = {
	render: (args) => <ArticleList {...args} />,
	decorators: [ThemeDecorator(Theme.DARK)],
	args: {
		view: ArticleViewWay.LIST
	}
};

export const Blue: Story = {
	render: (args) => <ArticleList {...args} />,
	decorators: [ThemeDecorator(Theme.BLUE)],
};

export const ListSkeleton: Story = {
	render: (args) => <ArticleList {...args} />,
	args: {
		isLoading: true,
		view: ArticleViewWay.LIST
	}
};

export const CardsSkeleton: Story = {
	render: (args) => <ArticleList {...args} />,
	args: {
		isLoading: true,
		view: ArticleViewWay.CARDS
	}
};