import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Rating from "../Rating/Rating";
import "./Info.css";
import { FaCheckCircle, FaCircle } from "react-icons/fa";

function setCount(counter, setCounter) {
	return setCounter(counter + 1);
}
function decCount(counter, setCounter) {
	if (counter == 0) {
		return setCounter(0);
	}
	return setCounter(counter - 1);
}

const sizes = [48, 49, 50, 51, 52, 53, 54];

const Info = () => {
	const [counter, setCounter] = useState(10);
	const [color, setColor] = useState(1);
	return (
		<Grid
			container
			direction="column"
			style={{ height: "100%", marginTop: "90px" }}
		>
			<div className="barr">
				<span className="name_style">Man </span>
				<img
					src="/triangle.png"
					alt="arrow"
					height="7px"
					width="16px"
				/>
				<span className="name_style">Shoes</span>

				<img
					src="/triangle.png"
					alt="arrow"
					height="7px"
					width="16px"
				/>
				<span className="category">Gray Running Sneakers</span>
			</div>

			<Box mt={2}>
				<div className="product_name">Black Running Sneakers</div>
				<Rating />
				<div className="price">
					₹16,959.99
					<span>₹20,069.99</span>
				</div>
				<div className="desc">
					Neoprene and membrane boots. Rubber insert with lacing over
					foot and back on heel. Lining and insole of the membrane
				</div>
				<div className="table_1">
					<table className="table_2">
						<tr>
							<td className="td_1">COLOR</td>
							<td className="td_1">SIZE</td>
							<td className="td_1">QUATITY</td>
						</tr>
					</table>
				</div>
				<div className="btn_line">
					<p className="btn-group">
						{color == 1 ? (
							<FaCheckCircle
								size={25}
								style={{ paddingRight: "5px" }}
							/>
						) : (
							<FaCircle
								size={25}
								style={{ paddingRight: "5px" }}
								onClick={() => {
									setColor(1);
								}}
							/>
						)}

						{color == 2 ? (
							<FaCircle
								size={25}
								style={{ paddingRight: "5px", fill: "#ebedf0" }}
							/>
						) : (
							<FaCircle
								size={25}
								style={{ paddingRight: "5px", fill: "#ebedf0" }}
								onClick={() => {
									setColor(2);
									console.log(color);
								}}
							/>
						)}

						{color == 3 ? (
							<FaCheckCircle
								size={25}
								style={{ fill: "#7A3050", content: "h" }}
							/>
						) : (
							<FaCircle
								size={25}
								style={{ fill: "#7A3050", content: "h" }}
								onClick={() => {
									setColor(3);
								}}
							/>
						)}
					</p>

					<p className="he">
						<select name="count">
							{sizes.map((size) => (
								<option value={size}>
									{size}&nbsp;&nbsp;&nbsp;&nbsp;
								</option>
							))}
						</select>
					</p>
					<p className="quantity">
						<button onClick={() => decCount(counter, setCounter)}>
							-
						</button>
						<button>{counter}</button>
						<button onClick={() => setCount(counter, setCounter)}>
							+
						</button>
					</p>
				</div>

				<div className="btn_part2">
					<button className="cart_button">
						<img
							src="/Web/AddToCart.svg"
							alt="cart"
							height="15px"
							width="18px"
							style={{
								paddingRight: "10px",
								paddingTop: "-10px",
							}}
						/>
						Add to Cart.
					</button>
					<button className="wishlist">
						<img
							src="/Web/Like.svg"
							alt="wishlist"
							height="15px"
							width="18px"
							style={{
								paddingRight: "10px",
								paddingTop: "-10px",
							}}
						/>
						Save to Wishlist.
					</button>
				</div>

				<div className="end_note">
					Standard delivery in 2-4 days or Premium delivery in 2-4
					hours
				</div>
			</Box>
		</Grid>
	);
};

export default Info;
