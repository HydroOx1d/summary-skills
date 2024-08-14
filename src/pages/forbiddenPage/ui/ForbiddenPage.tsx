
import { classNames } from "@/shared/lib/classNames/className";
import { Page } from "@/widgets/Page";

interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = (props: ForbiddenPageProps) => {
	const {
		className
	} = props;

	return (
		<Page data-testid="ForbiddenPage" className={classNames("", {}, [className])}>ForbiddenPage</Page>
	);
};

export default ForbiddenPage;
