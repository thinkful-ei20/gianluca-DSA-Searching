import React from 'react';
import PropTypes from 'prop-types';

import Datum from './datum.js';

import './styles/display.css';

const Display = (props) => {

	const data = props.data.map( (item,index) => {
		return <Datum key={index} dataPoint={item}/>;
	});

	let message = 'Currently Nothing Searched';

	if(props.stats) {
		if(!props.stats.steps) {
			message = 'The element you are looking for does not exist in the dataset!';
		} else {
			message = `It took ${props.stats.steps} steps to search for ${props.stats.value} using ${props.stats.selected} Search`;
		}
	}
	return(
		<div className="display-container">
			<h3 className="description">{message}</h3>
			<div className="data">
				{data}
			</div>
		</div>
	);
};

Display.propTypes = {
	data: PropTypes.array,
	stats: PropTypes.object
};

export default Display;