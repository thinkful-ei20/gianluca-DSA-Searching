import React, {Component} from 'react';

import SearchForm from './search-form';
import Display from './display.js';

import {linearSearch, binarySearch} from '../utils/search-algorithms';
import './styles/app.css';

export class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data : [
				89, 30, 25, 32, 72, 70, 51, 42, 25,
				24, 53, 55, 78, 50, 13, 40, 48, 32,
				26, 2 , 14, 33, 45, 72, 56, 44, 21,
				88, 27, 68, 15, 62, 93, 98, 73, 28,
				16, 46, 87, 28, 65, 38, 67, 16, 85,
				63, 23, 69, 64, 91, 9 , 70, 81, 27,
				97, 82, 6 , 88, 3 , 7 , 46, 13, 11,
				64, 76, 31, 26, 38, 28, 13, 17, 69,
				90, 1 , 6 , 7 , 64, 43, 9 , 73, 80,
				98, 46, 27, 22, 87, 49, 83, 6 , 39,
				42, 51, 54, 84, 34, 53, 78, 40, 14,
				5],
			stats : {},
			searchTerm : '',
			error:'',
			selected: 'linear'
		};

		this.processSearchChange = this.processSearchChange.bind(this);
		this.processOptionChange = this.processOptionChange.bind(this);
		this.processSubmit = this.processSubmit.bind(this);
	}

	processSearchChange(input) {
		let value = input.target.value;
		this.setState(() => ({
			searchTerm: value
		}));
	}

	processOptionChange(input) {
		let value = input.target.value;
		this.setState(() => ({
			selected: value
		}));
	}

	applySearchAlgorithm() {
		const stats = {
			value: this.state.searchTerm
		};
		switch(this.state.selected) {
		case 'linear':
			stats.steps = linearSearch(this.state.data, parseInt(this.state.searchTerm));
			stats.selected = this.state.selected;
			break;
		case 'binary':
			stats.steps = binarySearch(this.state.data, parseInt(this.state.searchTerm));
			stats.selected = this.state.selected;
			break;
		default :
			break;
		}

		this.setState(() => ({
			stats: stats
		}));
	}

	processSubmit() {
		// console.log(this.state);
		const raw = parseInt(this.state.searchTerm);
		if(isNaN(raw)) {
			this.setState(() => ({
				error: 'Input Must Be a Number'
			}));
		}
		else {
			this.applySearchAlgorithm();
		}
	}

	render(){
		const error = !this.state.error ? this.state.error : undefined;
		const stats = JSON.stringify(this.state.stats) !== '{}' ? this.state.stats : undefined;
		return(
			<div className="container">
				<header><h1>Search The Dataset</h1></header>
				<SearchForm
					handleSearchChange={this.processSearchChange}
					handleOptionChange={this.processOptionChange}
					handleSubmit={this.processSubmit}
					selected={this.state.selected}
				/>
				{error}
				<Display stats={stats} data={this.state.data}/>
			</div>
		);
	}
}

export default App;