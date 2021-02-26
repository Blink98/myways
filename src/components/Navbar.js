import React from "react";
import "../styles/Navbar.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Navbar({ handleShowLogin, handleShowSignUp }) {
	return (
		<div className="NavbarContainer">
			<div className="Navbar navbar navbar-expand-lg navbar-light container">
				{/* Nav Logo */}
				<a className="navbar-brand Navbar__logoContainer">
					<img
						className="Navbar__logo"
						src="/images/MyWays Logo@2x.png"
						alt="MyWays"
					/>
				</a>
				{/* Toggle Btn */}
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				{/* Nav Items */}
				<div
					className="collapse navbar-collapse Navbar__items"
					id="navbarNavDropdown"
				>
					<ul className="navbar-nav Navbar__itemsList">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
							>
								For You
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink"
							>
								<span className="dropdown-menu-arrow"></span>
								<a className="dropdown-item">Find matching internships</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item">Hire right talent</a>
								<div className="dropdown-divider"></div>
								<a className="dropdown-item">Work from Home</a>
							</div>
						</li>
						<li className="nav-item">
							<a className="nav-link">
								<img src="./images/Instant logo.png" />
								Instant Apply
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">Pricing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link">About us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link signUp" onClick={handleShowSignUp}>
								SIGN UP
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link login" onClick={handleShowLogin}>
								LOGIN
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
