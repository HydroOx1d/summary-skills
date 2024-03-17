import ViewCardsIcon from "shared/assets/icons/viewCards.svg";
import ViewListIcon from "shared/assets/icons/viewList.svg";
import { classNames } from "shared/lib/classNames/className";
import cls from "./ArticleView.module.scss";
import { ArticleViewWay } from "../../model/types/article";

const iconsConstant = [
	{
		Icon: ViewCardsIcon,
		view: ArticleViewWay.CARDS,
	},
	{
		Icon: ViewListIcon,
		view: ArticleViewWay.LIST,
	},
];

interface ArticleViewProps {
  view: ArticleViewWay;
  onToggleViews: (view: ArticleViewWay) => void
}

const ArticleView = ({view, onToggleViews}: ArticleViewProps) => {
	return (
		<div className={cls.ArticleViewIcons}>
			{iconsConstant.map((icon) => {
				return (
					<icon.Icon
						width={24}
						height={24}
						key={icon.view}
						onClick={onToggleViews.bind(null, icon.view)}
						className={classNames(cls.icon, {
							[cls.isActive]: view === icon.view,
						})}
					/>
				);
			})}
		</div>
	);
};

export default ArticleView;