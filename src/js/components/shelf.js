import {
  addToCart
} from '../utils';

import Price from '../modules/price';

import vtexRequest, {
	getProductsById
} from '../modules/vtexRequest';

const R = require('ramda');


export const productShelf = (product, list = false) => {

  const {
    productId,
    name,
    link,
    skus,
    image,
    categories
  } = product
  const price = new Price(skus[0]);
  const getUrlImage = (item) => item.images[0].imageUrl;
  const getUrlImageTag = (image, width, height) => {
   image = image.replace('#width#', width)
   image = image.replace('#height#', height)
   image = image.replace('~', 'http://casaegaragem.vteximg.com.br')
   image = image.replace('-undefined', '')

    return image;
  };


  let product_shelf = `
    <div class="product product--shelf" data-product-id="${productId}">
      <div class="product__header">
        <div class="product__media">
          <a class="product__link" href="${link}" tabindex="-1">
                ${getUrlImageTag(image, 279, 365)}
          </a>
        </div>
        <div class="product__actions">
          <a class="button product__link" title="Nome do produto" href="${link}" tabindex="-1">Ver Produto</a><a class="button button--primary product__buy" href="${link}" data-product-id="225047" tabindex="-1">Compre Rápido</a></div>
      </div>
	    <div class="product__reviews"></div>
      <div class="product__info">
        <h3 class="product__name"><a class="product__link" title="${name}" href="${link}" tabindex="-1"> ${name} </a></h3>
        <div class="product__price">
          ${price.mont(skus[0])}
        </div>
      </div>
      ${ categories ? `<div class="product__category"><a class="button" href="/category.html" tabindex="-1">+ Iluminação</a></div>` : ''}

    </div>`;

  if (list) product_shelf = `<li>${product_shelf}</li>`
  return product_shelf;
}

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
