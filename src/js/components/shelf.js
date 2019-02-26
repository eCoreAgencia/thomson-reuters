import {
  addToCart
} from '../utils';

import Price from '../modules/price';

import vtexRequest, {
	getProductsById
} from '../modules/vtexRequest';

const R = require('ramda');




$(document).ready(function () {




	$('.product__shelf').each(function () {
		$('.product__name .product__link', this).ellipsis({
			lines: 2
		});
		$('.product__name .product__author li', this).ellipsis({
			lines: 1
		});
	});

	$('.product__watch').each(function () {
		$('.product__watch-name .product__watch-link', this).ellipsis({
			lines: 2
		});
		$('.product__watch-author .most-visited__list li', this).ellipsis({
			lines: 1
		});
	});



	$('.product--shelf .product__buy').on('click', function (e) {
		e.preventDefault();
		const productID = $(this).data('product-id');
		addToCart(productID);
	});

	if($('body').hasClass('units')){
		const getUnits = () => {
			$('.product__shelf').each(function () {
				const self = this;
				const price = $('.product__units', this);

				const id = $('.product-shelf__id', this).data('product-id');
				fetch(`/api/catalog_system/pub/products/search?fq=productId:${id}`)
					.then(res => res.json())
					.then((product) => {
						const unidades = product[0].items[0].sellers[0].commertialOffer.AvailableQuantity;
						if (unidades > 0 && unidades < 10) {
							console.log(unidades);
							if (unidades === 1) {
								console.log(self);

								const elem1 = `Resta <strong>1</strong> unidade desse produto`;
								$(price).html(elem1);

							} else {
								console.log(self);
								const elem = `Restam <strong>${unidades}</strong> unidades desse produto`;
								$(price).html(elem);
							}


						}
					})
			});
		}


		getUnits();


		$('.page-number').on('click', () => {
			$('body').ajaxStop(function(){
				getUnits();
			});
		})
	}
});
