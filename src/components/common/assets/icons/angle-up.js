import React from "react";
export default function angleUp(props) {
	return (
		<i style={{ width: props.size, height: props.size, display: "inline-block" }}>
			<svg viewBox="0 0 512 512" fill={props.fill}>
				<path
					className="lexicon-icon-outline"
					d="M255.5 115.213c-6.936 0.22-13.81 2.972-19.111 8.273l-227.221 227.221c-11.059 11.026-11.059 28.94 0 39.999 11.026 11.058 28.941 11.058 39.999 0l206.333-206.333c0 0 206.333 206.333 206.333 206.333 11.058 11.058 28.973 11.058 39.999 0 11.058-11.058 11.058-28.973 0-39.999l-227.221-227.221c-5.3-5.3-12.175-8.052-19.111-8.273z"
				></path>
			</svg>
		</i>
	);
}
