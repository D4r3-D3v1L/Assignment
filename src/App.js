import NavbarTop from "./coomponents/Navbar/NavbarTop";
import Productimage from "./coomponents/ProductImage/Productimage";
import "./App.css";
import Footer from "./coomponents/Footer/Footer";
import Rating from "./coomponents/Rating/Rating";
import Grid from "@mui/material/Grid";
import Info from "./coomponents/Info/Info";
import React, { useState } from "react";

function App() {
	return (
		<div className="App">
			<div className="navbar">
				<NavbarTop />
			</div>

			<div>
				<Grid container>
					<Grid item sm={6} className="height_po">
						<div className="slice">
							<Productimage />
							<Footer />
						</div>
					</Grid>
					<Grid item sm={1}></Grid>
					<Grid item sm={4} style={{ marginLeft: "0px" }}>
						<Info />
					</Grid>
				</Grid>
			</div>

			{/* <div className="details">
				<div className="rating">
					<Rating />
				</div>
			</div> */}
		</div>
	);
}

export default App;
