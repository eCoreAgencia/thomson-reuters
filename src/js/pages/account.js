class account {
	constructor() {
		if ($('body').hasClass('orders')) {
			this.hideCancel();
		}
	}

	hideCancel() {
		setInterval(function(){
			$('.myo-progress-bar__ma-inner-circle').each(function() {
				var _this = $(this);
				var activeItem = _this.parent().find('.myo-progress-bar__text').text();
				console.log(activeItem)
				if(activeItem == "Entregar à transportadora" || activeItem == "Entregar pedido" || activeItem == "Aprovando pagamento" || activeItem == "Preparar pedido") {
					$('.myo-view-order ul.list li:last').remove();
				}
			})
		}, 500);
	}
}

window.account = new account();