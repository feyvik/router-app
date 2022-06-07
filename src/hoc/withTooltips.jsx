/** @format */

import React, { useState } from 'react';

const WithTooltips = (WrappedComponent) => {
	return (props) => {
		const [showTooltip, setShowTooltip] = useState(false);

		const mouseOver = () => setShowTooltip(true);
		const mouseOut = () => setShowTooltip(false);

		return (
			<div onMouseOver={mouseOver} onMouseOut={mouseOut}>
				<WrappedComponent {...props} showTooltip={showTooltip} />
			</div>
		);
	};
};
export default WithTooltips;
