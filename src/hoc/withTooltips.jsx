/** @format */

import React, { useState } from 'react';

const withTooltips = (WrappedComponent) => {
	return (props) => {
		const [showTooltip, setShowTooltip] = useState(false);

		const mouseOver = () => setShowTooltip(true);
		const mouseOut = () => setShowTooltip(false);

		return (
			<WrappedComponent
				{...props}
				showTooltip={showTooltip}
				onMouseOver={mouseOver}
				onMouseOut={mouseOut}
			/>
		);
	};
};
export default withTooltips;
