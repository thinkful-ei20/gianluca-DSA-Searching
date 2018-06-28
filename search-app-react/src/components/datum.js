import React from 'react';
import PropTypes from 'prop-types';

import './styles/datum.css';

const Datum = (props) => {
	return(
		<div className="data-point">{props.dataPoint}</div>
	);
};

Datum.propTypes = {
	dataPoint : PropTypes.node
}
export default Datum;