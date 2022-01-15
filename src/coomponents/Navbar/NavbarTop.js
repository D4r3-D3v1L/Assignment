import React from "react";
import "./NavbarTop.css";

const NavbarTop = () => {
	return (
		<header className="toolbar">
			<nav className="toolbar__navigation">
				<div className="toolbar__logo">
					<a href="/">MIKE</a>
				</div>
				<div className="spacer" />

				<div className="toolbar_navigation-items">
					<ul>
						<li>
							<div
								className="search_icon"
								style={{
									padding: "3px",
									backgroundColor: "#ECEFF2",
									borderRadius: "50px",
								}}
							>
								<input type="search" placeholder="Search" />
								<button type="submit">Search</button>
							</div>
						</li>
						<li>
							<a href="/">
								<img src="/Web/Cart.svg" />
							</a>
							<span className="count">0</span>
						</li>
						<li>
							<a href="/">
								<img src="/Web/MenuHamburger.svg" />
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavbarTop;
