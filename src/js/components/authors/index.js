import React from 'react';
import ReactDOM from 'react-dom';
import Authors from './authors';
import {
	getProductShelfByTerm
} from '../../modules/vtexRequest';
const R = require('ramda');

$(document).ready(function () {
	if ($('li.helperComplement')[0]) {
		$('li.helperComplement').remove();
	}

	if ($('body').hasClass('page--authors')) {
		ReactDOM.render( <Authors /> , document.getElementById('app'));
	}



	$(document).on('build', function(){


		$('.author__books').each( async function() {
			const self = this;
			const name = $(this).data('author');
			await getProductShelfByTerm(name).then(res => {
				$(res).insertAfter(`.author__books[data-author="${name}"] .author__books-title`);
			})


		})

		$('.products__list .shelf').each(function () {
			$('.shelf__name', this).ellipsis({
				lines: 1
			});
		});
	})
})
