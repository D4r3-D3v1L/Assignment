import React from "react";
import ReactStars from "react-rating-stars-component";
import "./Rating.css";

const secondExample = {
	size: 30,
	count: 5,
	color: "#ECEFF2",
	activeColor: "yellow",
	value: 7.5,
	a11y: true,
	isHalf: true,
	onChange: (newValue) => {
		console.log(`Rating is  ${newValue}`);
	},
};

const Rating = () => {
	return (
		<div>
			<table>
				<tr>
					<td className="stars">
						<ReactStars {...secondExample} />
					</td>
					<td className="votes">18 votes</td>
				</tr>
			</table>
		</div>
	);
};

export default Rating;
