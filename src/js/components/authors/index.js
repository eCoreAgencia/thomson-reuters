import React from 'react';
import ReactDOM from 'react-dom';
import Authors from './authors';

$(document).ready(function () {
	if ($('li.helperComplement')[0]) {
		$('li.helperComplement').remove();
	}

	if ($('body').hasClass('page--authors')) {
		ReactDOM.render( <Authors /> , document.getElementById('app'));
	}
})
