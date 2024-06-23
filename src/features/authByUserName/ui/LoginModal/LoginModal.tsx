import React from "react";
import Modal from "@/shared/ui/Modal/Modal";
import { LoginFormAsyncComponent } from "../LoginForm/LoginForm.async";
import Loader from "@/shared/ui/Loader/Loader";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
	const {isOpen, onClose} = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose} lazy>
			<React.Suspense fallback={<Loader/>}>
				<LoginFormAsyncComponent onSuccess={onClose} />
			</React.Suspense>
		</Modal>
	);
};

export default LoginModal;