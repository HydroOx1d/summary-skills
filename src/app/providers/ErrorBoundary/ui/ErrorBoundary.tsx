import React from "react";
import { PageError } from "@/widgets/PageError";

interface ErrorBoundaryProps {
  children?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		console.log(error);
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
    
		console.log(error, info.componentStack);
	}

	render() {
		if (this.state.hasError) {
			return (
				<React.Suspense fallback="">
					<PageError />
				</React.Suspense>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;