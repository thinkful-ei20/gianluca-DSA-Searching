import React from 'react';
import PropTypes from 'prop-types';

import './styles/search-form.css';

const SearchForm = (props) => {

	const submit = e => {
		e.preventDefault();
		props.handleSubmit();
	};

	return(
		<form onSubmit ={e => submit(e)}>
			<input type='text' onChange={props.handleSearchChange}/>
			<button type='submit'>Submit</button>
			<fieldset>
				<div className="slct-alg">
					<label htmlFor="linear">
						<input type='radio' id="linear" value="linear" name="search-algo"
							checked={props.selected==='linear'}
							onChange={props.handleOptionChange} />
					Linear</label>
					<label htmlFor="binary">
						<input type='radio' id="binary" value="binary" name="search-algo"
							checked={props.selected==='binary'}
							onChange={props.handleOptionChange}/>
					Binary(Pre-sorted)</label>
				</div>
			</fieldset>
		</form>
	);
};

SearchForm.propTypes = {
	handleSearchChange: PropTypes.func.isRequired,
	handleOptionChange: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	selected: PropTypes.string.isRequired
};

export default SearchForm;