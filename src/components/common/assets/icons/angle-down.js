import React from "react";
export default function angleDown(props) {
	return (
		<i style={{ width: props.size, height: props.size, display: "inline-block" }}>
			<svg viewBox="0 0 512 512" fill={props.fill}>
				<path
					className="lexicon-icon-outline"
					d="M256 384c6.936-0.22 13.81-2.973 19.111-8.272l227.221-227.221c11.058-11.026 11.058-28.941 0-39.999-11.026-11.058-28.94-11.058-39.999 0l-206.333 206.333c0 0-206.333-206.333-206.333-206.333-11.059-11.058-28.973-11.058-39.999 0-11.059 11.058-11.059 28.972 0 39.999l227.221 227.221c5.3 5.3 12.174 8.053 19.111 8.272z"
				></path>
			</svg>
		</i>
	);
}