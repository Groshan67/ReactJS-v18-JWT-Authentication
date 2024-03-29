import React from "react";
export default function angleLeft(props) {
	return (
		<i style={{ width: props.size, height: props.size, display: "inline-block" }}>
			<svg viewBox="0 0 512 512" fill={props.fill}>
				<path
					className="lexicon-icon-outline"
					d="M114.106 254.607c0.22 6.936 2.972 13.811 8.272 19.11l227.222 227.221c11.026 11.058 28.94 11.058 39.999 0 11.058-11.026 11.058-28.94 0-39.999l-206.333-206.333c0 0 206.333-206.333 206.333-206.333 11.058-11.059 11.058-28.973 0-39.999-11.058-11.059-28.973-11.059-39.999 0l-227.221 227.221c-5.3 5.3-8.052 12.174-8.273 19.111z"
				></path>
			</svg>
		</i>
	);
}