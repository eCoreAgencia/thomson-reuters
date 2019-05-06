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




		$('.products__list .shelf').each(function () {
			$('.shelf__name .shelf__link', this).ellipsis({
				lines: 1
			});
		});

		$('.author__link').on('click', function (e) {
			e.preventDefault();
			$(this).parent().find('div').attr('style', '');
			$(this).hide();
		})
	})
})
