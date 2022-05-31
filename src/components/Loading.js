import React, { Component } from "react";
import spinner from "/static/spinner.gif";

const Loading = props => {
	return (
		<div className="text-center ">
			<img src={spinner} alt="loading..." />
		</div>
	);
};

export default Loading;