import React, { Component } from 'react';
import Slider from 'react-slick'
const R = require('ramda');



export default class Shelf extends Component {




	render() {
		const { products } = this.props
		const settings = {
			infinite: false,
			speed: 500,
			slidesToShow: 2,
			slidesToScroll: 1
		};

		console.log(products);

		if (R.isEmpty(products)) {
			return (
				<span className="author__not-found"> Sem Resultados </span>
			)

		}else {


			return (

                    <ul className="products__list">
						<Slider {...settings}>
							{products.map((product, index) => (
								<li key={index} className="products__item">
									<div className="shelf">
										<div className="shelf__media">
											<a className="shelf__link" href={`/${product.linkText}/p`}>
												<img className="author__image" src={product.items[0].images[0].imageUrl} width="160" />
											</a>

										</div>
										<div className="shelf__info">
											<h3 className="shelf__name">
												<a className="shelf__link" href={`/${product.linkText}/p`}>
													{product.productName}
												</a>
											</h3>

										</div>
									</div>
								</li>
							))}
						</Slider>
                    </ul>

			)
		}

	}
}
