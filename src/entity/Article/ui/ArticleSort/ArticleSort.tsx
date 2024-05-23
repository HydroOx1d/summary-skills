import React from "react";
import cls from "./ArticleSort.module.scss";
import Select from "shared/ui/Select/Select";
import type { OptionType } from "shared/ui/Select/Select";
import { classNames } from "shared/lib/classNames/className";
import { ArticleSortField } from "../../model/consts/consts";
import type { SortOrder } from "shared/types";

interface ArticleSortProps {
  className?: string;
	sort?: ArticleSortField;
	order?: SortOrder;
	onChangeSort?: (sort: ArticleSortField) => void;
	onChangeOrder?: (order: SortOrder) => void;
}

const ArticleSort = (props: ArticleSortProps) => {
	const {
		className,
		sort,
		order,
		onChangeOrder,
		onChangeSort
	} = props;

	const sortFieldOptions = React.useMemo<OptionType<ArticleSortField>[]>(() => {
		return [
			{
				value: ArticleSortField.CREATED_AT,
				content: "Дата создания"
			},
			{
				value: ArticleSortField.TITLE,
				content: "Название"
			},
			{
				value: ArticleSortField.VIEWS,
				content: "По просмотрам"
			},
		];
	}, []);

	const orderOptions = React.useMemo<OptionType<SortOrder>[]>(() => {
		return [
			{
				value: "asc",
				content: "Возрастанию"
			},
			{
				value: "desc",
				content: "Убыванию"
			},
		];
	}, []);

	return (
		<div className={classNames(cls.ArticleSort, {}, [className])}>
			<Select placeholder="Сортировать" options={sortFieldOptions} value={sort} onChange={onChangeSort}/>
			<Select placeholder="По" options={orderOptions} value={order} onChange={onChangeOrder}/>
		</div>
	);
};

export default ArticleSort;