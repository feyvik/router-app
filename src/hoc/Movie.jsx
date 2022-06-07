/** @format */
import React from 'react';
import withTooltips from './withTooltips';

const Movie = (props) => {
	const { showTooltip } = props;
	return (
		<div>
			<h1>Hello</h1>
			{showTooltip && <div>Some Tooltips</div>}
		</div>
	);
};

export default withTooltips(Movie);
