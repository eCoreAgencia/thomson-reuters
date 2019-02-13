import React from 'react';
import ReactDOM from 'react-dom';
import MakeYourKit from './makeYourKit';

$(document).ready(function () {
	if ($('li.helperComplement')[0]) {
		$('li.helperComplement').remove();
	}

	if($('body').hasClass('make-your-kit')){
		ReactDOM.render(<MakeYourKit />, document.getElementById('kit'));
	}
})
