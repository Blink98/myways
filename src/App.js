import React, { useState } from "react";
import "./App.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
	// For Login
	const [showLogin, setShowLogin] = useState(false);

	const handleShowLogin = () => {
		setShowLogin(true);
	};

	const handleCloseLogin = () => setShowLogin(false);

	// For Signup
	const [showSignUp, setShowSignUp] = useState(false);

	const handleShowSignUp = () => {
		setShowSignUp(true);
	};

	const handleCloseSignUp = () => setShowSignUp(false);

	return (
		<div className="App">
			<Navbar
				handleShowLogin={handleShowLogin}
				handleShowSignUp={handleShowSignUp}
			/>
			<Home handleShowSignUp={handleShowSignUp} />
			<Login
				showLogin={showLogin}
				setShowLogin={setShowLogin}
				handleCloseLogin={handleCloseLogin}
			/>
			<Signup
				showSignUp={showSignUp}
				setShowSignUp={setShowSignUp}
				handleCloseSignUp={handleCloseSignUp}
			/>
		</div>
	);
}

export default App;
