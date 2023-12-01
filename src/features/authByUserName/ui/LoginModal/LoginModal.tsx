import React from "react";
import Modal from "shared/ui/Modal/Modal";
import LoginForm from "../LoginForm/LoginForm";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
	const {isOpen, onClose} = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose} lazy>
			<LoginForm/>
		</Modal>
	);
};

export default LoginModal;