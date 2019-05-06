$(document).ready(function(){
	if ($('body').hasClass('orders')) {
		setInterval(function () {
			$('.myo-progress-bar__ma-inner-circle').each(function () {
				var _this = $(this);
				var activeItem = _this.parent().find('.myo-progress-bar__text').text();
				console.log(activeItem)
				if (activeItem == "Entregar à transportadora" || activeItem == "Entregar pedido" || activeItem == "Aprovando pagamento" || activeItem == "Preparar pedido") {
					$('.myo-view-order ul.list li:last').remove();
				}
			})
		}, 500);
	}
})
