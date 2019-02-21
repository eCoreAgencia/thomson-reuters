import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Dotdotdot from 'react-dotdotdot'


export default class Shelf extends Component {




	render() {
        const { products } = this.props
        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
          };
		if(products.length > 0) {
			return (
                
                    <ul className="products__list">
                        <Carousel slidesToShow="2">
                            {products.map((product, index) => (
                                <li key={index} className="products__item">
                                    <div className="shelf">
                                        <div className="shelf__media">
                                            <img className="author__image" src={product.items[0].images[0].imageUrl} width="160" />
                                        </div>
                                        <div className="shelf__info">
                                            <Dotdotdot clamp={1}>
                                                <h3 className="shelf__name">{product.productName}</h3>
                                            </Dotdotdot>
                                            
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </Carousel> 
                    </ul>
                   
			)
		}else {
			return (
				<span className="author__not-found"> Sem Resultados </span>
			)
		}

	}
}
