import React, { useEffect, useState } from "react";
import "../styles/Signup.scss";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function Signup({ showSignUp, setShowSignUp, handleCloseSignUp }) {
	// Sign Up
	useEffect(() => {
		setShowSignUp(showSignUp);
	}, [showSignUp]);

	// OTP
	const [showOtp, setShowOtp] = useState(false);

	const handleShowOtp = () => {
		handleCloseSignUp();
		setShowOtp(true);
	};
	const handleCloseOtp = () => setShowOtp(false);

	const handleBackOtp = () => {
		handleCloseOtp();
		setShowSignUp(true);
	};

	const handleEnterOtp = () => {
		handleShowSuccess();
		setTimeout(() => handleCloseSuccess(), 2000);
	};

	// Success
	const [showSuccess, setShowSuccess] = useState(false);

	const handleShowSuccess = () => {
		handleCloseOtp();
		setShowSuccess(true);
	};
	const handleCloseSuccess = () => {
		setShowSuccess(false);
	};

	return (
		<>
			{/* Sign Up Modal */}
			<Modal
				className="signup"
				size="lg"
				show={showSignUp}
				onHide={handleCloseSignUp}
				centered
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<h2 className="signup__heading">Sign Up</h2>
					<p className="signup__tagline">It's quick and easy</p>

					<Form className="signUpForm">
						<Row>
							<Col className="mr-10">
								<Form.Control placeholder="First name" />
							</Col>
							<Col>
								<Form.Control placeholder="Last name" />
							</Col>
						</Row>
						<Form.Group controlId="formGroupEmail">
							<Form.Control type="email" placeholder="Enter email" />
						</Form.Group>
						<Form.Group controlId="formGroupPassword">
							<Form.Control type="password" placeholder="Password" />
						</Form.Group>

						<Button
							onClick={handleShowOtp}
							className="signUpForm__btn"
							variant="primary"
						>
							Sign Up
						</Button>
					</Form>
				</Modal.Body>
			</Modal>

			{/* OTP Modal */}
			<Modal
				className="signup otp"
				size="lg"
				show={showOtp}
				onHide={handleCloseOtp}
				animation={false}
				centered
			>
				<Modal.Header closeButton>
					<img
						onClick={handleBackOtp}
						className="otp__backBtn"
						src="./images/Icon material-arrow_back.svg"
					></img>
				</Modal.Header>
				<Modal.Body>
					<h2 className="otp__heading">OTP sent!</h2>

					<Form className="signUpForm otpForm">
						<Form.Group>
							<Form.Control type="text" placeholder="Enter your OTP" />
						</Form.Group>

						<p className="otpForm__userSuggestion">
							One time Passcode sent to your email ID- abc@gmail.com
						</p>

						<Button
							onClick={handleEnterOtp}
							className="signUpForm__btn otpForm__btn"
							variant="primary"
						>
							Enter
						</Button>
					</Form>
				</Modal.Body>
			</Modal>

			{/* Success Modal */}
			<Modal
				className="signup otp success"
				size="lg"
				show={showSuccess}
				onHide={handleCloseSuccess}
				animation={false}
				centered
			>
				<Modal.Body>
					<img
						className="success__img"
						src="/images/Icon awesome-check-circle.svg"
					/>
					<p className="success__msg">Thanks. Successful!</p>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default Signup;
