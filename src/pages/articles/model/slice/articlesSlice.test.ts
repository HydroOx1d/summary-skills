import { ArticleType, ArticleViewWay } from "entity/Article";
import type { Article } from "entity/Article";
import type { ArticlesSchema } from "../types/articles";
import { articlesActions, articlesReducer } from "./articlesSlice";
import { fetchArticles } from "../services/fetchArticles/fetchArticles";

const data: Article[] = [
	{
		id: "1",
		title: "Javascript новости",
		subtitle: "Что такое JavaScript?",
		firstImage:
      "https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png",
		views: 122,
		createdAt: "26.02.2022",
		type: ["IT"],
		user: {
			id: "1",
			username: "Ox1d",
		},
		preview:
      "JavaScript – это язык программирования, который используют разработчики для создания интерактивных веб-страниц. Функции JavaScript могут улучшить удобство взаимодействия пользователя с веб-сайтом: от обновления ленты новостей в социальных сетях и до отображения анимации и интерактивных карт. JavaScript является языком программирования при разработки скриптов для выполнения на стороне клиента, что делает его одной из базовых технологий во всемирной сети Интернет. Например, карусель изображения, выпадающее по клику меню и динамично меняющиеся цвета элементов на веб-странице, которые вы видите во время просмотра страниц в Интернете, выполнены при помощи JavaScript.",
		content:
      "# JavaScript: Язык программирования для веб-разработки\n\nJavaScript - это высокоуровневый, интерпретируемый язык программирования, который изначально создавался для обеспечения интерактивности на веб-сайтах. С появлением языка, в 1995 году, он претерпел значительное развитие и стал неотъемлемой частью веб-технологий.\n\n## Основные характеристики JavaScript\n\n### Простота в изучении\n\nJavaScript отличается относительной простотой в изучении, что делает его доступным для новичков. Его синтаксис легко читаем и схож с другими языками программирования.\n\n### Интерпретируемость\n\nJavaScript является интерпретируемым языком, что позволяет выполнять код непосредственно в процессе работы программы, без предварительной компиляции. Это упрощает процесс разработки и отладки.\n\n### Объектно-ориентированный подход\n\nJavaScript является объектно-ориентированным языком, что позволяет разработчикам создавать и манипулировать объектами для построения сложных структур данных и приложений.\n\n### Поддержка браузерами\n\nJavaScript поддерживается всеми современными браузерами, что обеспечивает его широкое использование в веб-разработке. Это позволяет создавать современные и интерактивные веб-приложения.\n\n```javascript\n// Пример простого кода на JavaScript\nfunction greet(name) {\n  console.log(\"Привет, \" + name + \"!\");\n}\n\n// Вызываем функцию с аргументом\ngreet(\"Мир\");\n```\n\n## Основные возможности JavaScript\n\n### Динамическая типизация\n\nJavaScript обладает динамической типизацией, что позволяет переменным изменять свой тип данных в процессе выполнения программы. Это придает гибкость при написании кода.\n\n### Событийно-ориентированное программирование\n\nJavaScript активно используется для обработки событий, таких как клики мыши, нажатия клавиш и другие. Это делает возможным создание интерактивных пользовательских интерфейсов.\n\n### AJAX (Asynchronous JavaScript and XML)\n\nJavaScript позволяет создавать асинхронные запросы к серверу без перезагрузки страницы, улучшая производительность и пользовательский опыт.\n\n### Библиотеки и фреймворки\n\nСуществует множество библиотек и фреймворков JavaScript, таких как React, Angular и Vue.js, которые облегчают разработку сложных веб-приложений, предоставляя готовые компоненты и инструменты.\n\n## Эволюция JavaScript\n\nJavaScript постоянно развивается, и его стандарты обновляются регулярно. ES6 (ECMAScript 2015) внес значительные изменения и добавил новые возможности, такие как стрелочные функции, классы, шаблонные строки и деструктуризация.\n\nС появлением новых стандартов, разработчики могут использовать современные возможности языка, что способствует улучшению читаемости кода и повышению производительности.\n\n## Заключение\n\nJavaScript играет ключевую роль в мире веб-разработки, обеспечивая создание динамичных и интерактивных веб-сайтов. Благодаря своей простоте в изучении, поддержке браузерами и активному сообществу разработчиков, JavaScript остается одним из самых популярных языков программирования.",
	},
];

describe("articles slice test", () => {
	test("set view", () => {
		const state: DeepPartial<ArticlesSchema> = {
			view: "cards" as ArticleViewWay
		};

		expect(
			articlesReducer(
        state as ArticlesSchema,
        articlesActions.setView("list" as ArticleViewWay)
			)
		).toEqual({
			view: "list" as ArticleViewWay
		});
	});

	test("set type", () => {
		const state: DeepPartial<ArticlesSchema> = {
			type: "all" as ArticleType
		};

		expect(
			articlesReducer(
        state as ArticlesSchema,
        articlesActions.setType("IT" as ArticleType)
			)
		).toEqual({
			type: "IT" as ArticleType
		});
	});

	test("extra reducer (fetchArticles test) - pending", () => {
		const state: DeepPartial<ArticlesSchema> = {
			isLoading: false,
			error: "error"
		};

		expect(articlesReducer(state as ArticlesSchema, fetchArticles.pending("", {}))).toEqual({
			isLoading: true,
			error: undefined
		});
	});

	test("extra reducer (fetchArticles test) - fulfilled", () => {
		const state: DeepPartial<ArticlesSchema> = {
			ids: [],
			entities: {},
			isLoading: true,
			hasMore: true
		};

		expect(articlesReducer(state as ArticlesSchema, fetchArticles.fulfilled(data, "", {}))).toEqual({
			ids: ["1"],
			entities: {
				"1": {
					...data[0]
				}
			},
			isLoading: false,
			hasMore: false
		});
	});
});
