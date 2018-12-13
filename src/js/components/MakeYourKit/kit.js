import React, { Component } from 'react';
import Products from './products';
import Price from './price';
import {  getProductsByTerm } from '../../modules/vtexRequest'

export default class Kit extends Component {
	constructor(props){
		super(props)
		this.state = {
			list: []
		}

	}



	render() {
		if(this.props.kit.length > 0) {
			return (
				<div className="kit__mount">
					<Products list={this.props.kit}/>
					<Price list={this.props.kit} action={this.props.action} />
				</div>
			)
		}else {
			return (
				<span></span>
			)
		}

	}
}
