import React from "react";
import cls from "./ArticleList.module.scss";
import { ArticleViewWay } from "../../model/consts/consts";
import Skeleton from "shared/ui/Skeleton/Skeleton";
import { classNames } from "shared/lib/classNames/className";

interface ArticleListSkeletonProps {
	className?: string;
  view: ArticleViewWay;
}

const ArticleListSkeleton = ({view, className}: ArticleListSkeletonProps) => {
  
	if (view === ArticleViewWay.CARDS) {
		return (
			<div className={classNames(cls.Skeleton, {}, [className])}>
				<Skeleton width={"100%"} height={350} className={cls.image}/>
				<div className={cls.info}>
					<Skeleton width={50} height={15} />
					<Skeleton width={100} height={15} />
				</div>
				<Skeleton width={"100%"} height={15}/>
			</div>
		);
	}
  
	return (
		<div className={cls.Skeleton}>
			<div className={cls.header}>
				<div className={cls.user}>
					<Skeleton width={30} height={30} border={"50%"} />
					<Skeleton width={50} height={15} />
				</div>
				<Skeleton width={100} height={15} />
			</div>
			<Skeleton width={"100%"} height={30} className={cls.title} />
			<Skeleton width={100} height={15} className={cls.type} />
			<Skeleton width={"100%"} height={400} className={cls.type} />
			<Skeleton width={"100%"} height={150} className={cls.paragraph} />
			<Skeleton width={"100%"} height={200} className={cls.paragraph} />
			<div className={cls.footer}>
				<Skeleton width={100} height={35} />
				<Skeleton width={50} height={15} />
			</div>
		</div>
	);
};

export default React.memo(ArticleListSkeleton);