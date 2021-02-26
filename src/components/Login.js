import React, { useEffect } from "react";
import "../styles/Login.scss";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function Login({ showLogin, setShowLogin, handleCloseLogin }) {
	useEffect(() => {
		setShowLogin(showLogin);
	}, [showLogin]);

	return (
		<Modal className="loginModal" show={showLogin} onHide={handleCloseLogin}>
			<Modal.Header closeButton>
				<Modal.Title>Login</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form className="loginForm">
					<h3 className="loginForm__heading">Student</h3>

					<Form.Group controlId="formBasicEmail">
						<Form.Control type="email" placeholder="Email" autoComplete="on" />
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control
							type="password"
							placeholder="Password"
							autoComplete="on"
						/>
					</Form.Group>
					<a className="loginForm__link">Forgot Password?</a>
					<Button
						onClick={handleCloseLogin}
						className="loginForm__btn"
						variant="primary"
					>
						Login
					</Button>
					<a className="loginForm__link bottom--link">
						New to MyWays? Sign Up here
					</a>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default Login;
