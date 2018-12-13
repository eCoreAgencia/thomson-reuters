import React, { Component } from 'react';
import Form from './form';
import List from './list';
import {  getProductsByTerm } from '../../modules/vtexRequest'

export default class Search extends Component {
	constructor(props){
		super(props)
		this.state = {
			value: '',
			list: []
		}
		this.submitSearch = this.submitSearch.bind(this);
		this.getProductResult = this.getProductResult.bind(this);
		this.handleChange = this.handleChange.bind(this);
		console.log(this.props);
	}

	getProductResult(){
		if(this.state.value.length >= 3){
			const result = getProductsByTerm(this.state.value);
			result.then(res => {
				console.log(res);
				this.setState({...this.state, list: res});
			});
		}

	}

	handleChange(e){
		this.setState({...this.state, value: e.target.value});
		this.getProductResult();
	}
	submitSearch(e){
		e.preventDefault();
		this.getProductResult();
	}

	render() {
		return (
			<div className="search">
				<Form submit={this.submitSearch} value={this.state.value} change={this.handleChange}/>
				<List list={this.state.list} button={this.props.action}/>
			</div>
		)
	}
}
