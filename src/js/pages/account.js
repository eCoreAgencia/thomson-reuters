class account {
	constructor() {
		if ($('body').hasClass('orders')) {
			this.hideCancel();
		}
	}

	hideCancel() {
		$(document).ajaxStop(function () {
			$('.myo-progress-bar__ma-inner-circle').each(function () {
				var _this = $(this);
				var activeItem = _this.parent().find('.myo-progress-bar__text').text();
				if (activeItem == "Entregar à transportadora" || activeItem == "Entregar pedido") {
					$('.myo-view-order ul.list li:last').remove();
				}
			})
		})
	}
}
