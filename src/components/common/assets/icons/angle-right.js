import React from "react";
export default function angleRight(props) {
	return (
		<i style={{ width: props.size, height: props.size, display: "inline-block" }}>
			<svg viewBox="0 0 512 512" fill={props.fill}>
				<path
					className="lexicon-icon-outline"
					d="M396.394 255.607c-0.22-6.936-2.973-13.81-8.272-19.111l-227.221-227.221c-11.026-11.059-28.94-11.059-39.999 0-11.058 11.026-11.058 28.941 0 39.999l206.333 206.333c0 0-206.333 206.333-206.333 206.333-11.058 11.058-11.058 28.973 0 39.999 11.059 11.059 28.972 11.059 39.999 0l227.221-227.221c5.3-5.3 8.053-12.175 8.272-19.111z"
				></path>
			</svg>
		</i>
	);
}