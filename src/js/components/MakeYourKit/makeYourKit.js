
import React, { Component } from 'react';
import PageHeader from './pageHeader';
import Search from './search';
import Kit from './kit';

import { addToCart } from '../../utils'

export default class MakeYourKit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			kit: []
		}
		this.addToList = this.addToList.bind(this);
		this.buyKit = this.buyKit.bind(this);
	}

	buyKit() {
		this.state.kit.map(kit => {
			const id = kit.items[0].itemId;
			console.log(id);
			addToCart(id,1,"2");
		})
	}

	addToList(e){
		let list = this.state.kit;
		const product = JSON.parse(e.target.getAttribute('data-product'))
		console.log();
		list.push(product);
		this.setState({...this.state, kit: list})
		console.log('adicionado', this.state.kit);
	}

	render() {
		return (
			<div className="kit">
				<div className="kit__page-header">
					<PageHeader title='Monte o seu Kit' description="Aqui você pode criar seus próprios kits, com quantos livros quiser. É fácil e rápido de fazer, basta selecionar os livros desejados." />
				</div>
				<div className="kit__search">
					<Search action={this.addToList}/>

				</div>
				<Kit kit={this.state.kit} action={this.buyKit}/>

			</div>
		)
	}
}
