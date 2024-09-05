
import { StateSchema } from "@/app/providers/store";
import { getAccountSettingsByKey, saveAccountSettings } from "@/entity/User";
import { useThunkDispatch } from "@/shared/lib/hooks/useThunkDispatch";
import Modal from "@/shared/ui/deprecated/Modal/Modal";
import Text from "@/shared/ui/deprecated/Text/Text";
import React from "react";
import { useSelector } from "react-redux";

interface ArticlePageGreeterProps {
  className?: string;
}

const ArticlePageGreeter = (props: ArticlePageGreeterProps) => {
	const {
		className
	} = props;
	const isArticlePageFirstVisit = useSelector((state:StateSchema) => getAccountSettingsByKey(state, "isArticlePageFirstVisit"));
	const [isOpen, setIsOpen] = React.useState(false);
	const dispatch = useThunkDispatch();
  
	React.useEffect(() => {
		if (isArticlePageFirstVisit) {
			setIsOpen(true);
		}
	}, [isArticlePageFirstVisit]);

	const onCloseHandle = React.useCallback(() => {
		setIsOpen(false);
		dispatch(saveAccountSettings({
			isArticlePageFirstVisit: false
		}));
	},[dispatch]);

	return (
		<Modal isOpen={isOpen} onClose={onCloseHandle} lazy>
			<Text title="Доброго пожаловать" text="Приятного времяпровождения"/>
		</Modal>
	);
};

export default ArticlePageGreeter;
