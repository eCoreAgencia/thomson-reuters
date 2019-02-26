import React, { Component } from 'react';
const R = require('ramda');


export default class Shelf extends Component {




	render() {
        const { products } = this.props

		if (!R.isNil(!R.isEmpty(products))) {
			console.log(products, '--');
			return (

                    <ul className="products__list">
                        {products.map((product, index) => (
							<li key={index} className="products__item">
								<div className="shelf">
									<div className="shelf__media">
										<img className="author__image" src={product.items[0].images[0].imageUrl} width="160" />
									</div>
									<div className="shelf__info">
										<h3 className="shelf__name">{product.productName}</h3>

									</div>
								</div>
							</li>
						))}
                    </ul>

			)
		}else {
			return (
				<span className="author__not-found"> Sem Resultados </span>
			)
		}

	}
}
