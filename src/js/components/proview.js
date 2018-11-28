class Proview {
	constructor() {
		$('.proview__form').on('submit', function (e) {
			e.preventDefault();
			$(this).addClass('is-loading');
		});
	}

	fieldError(field) {
		console.log(field);
	}
}


$(document).ready(() => {
	if ($('body').hasClass('proview-form')) {

		window.Proview = new Proview();

	}
});
