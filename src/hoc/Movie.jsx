/** @format */
import React from 'react';
import WithTooltips from './withTooltips';

const Style = {
	main: {
		width: '100%',
		height: '100vh',
		background: 'red',
		color: 'white',
	},
	header: {
		margin: '0',
	},
};

const Movie = (props) => {
	const { showTooltip } = props;
	return (
		<div style={showTooltip === true ? Style.main : Style.container}>
			<div className='container'>
				<h1 style={Style.header}>Hello</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam,
					impedit hic consequatur quo aspernatur qui maxime, animi quaerat
					accusantium ex voluptate dolore, doloremque perferendis nesciunt ad id
					eligendi excepturi quibusdam.
				</p>
			</div>
		</div>
	);
};

export default WithTooltips(Movie);
