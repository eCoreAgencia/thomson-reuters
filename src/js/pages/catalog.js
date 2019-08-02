import { appendFile } from "fs";



$(document).ready(function(){

	const showMobFilter = () => {
		const button = $('.filterCategory--trigger');
		const sideFilter = $('.navCatalog__absolute');
		const overlay = $('.minicart__overlay, .close');
		button.click(() => {
			sideFilter.addClass('is-expanded');
			overlay.fadeToggle();
		});
		overlay.click(() => {
			sideFilter.removeClass('is-expanded');
			overlay.hide();
		});

		const h5 = $('.search-multiple-navigator fieldset h5');
		h5.click((e) => {
			$(e.target)
				.toggleClass('arrow-down')
				.next()
				.fadeToggle();
		});
		const top = `<a class="voltar-ao-topo" href="#top">
					<i class="simple-arrow-up"></i>
					<p>VOLTAR AO TOPO</p>
				</a>`;
		const pagger = $('.pager.bottom');
		$(pagger).before(top);
	}

	const orderBy = () => {
		const url = window.location.href;

		$('.orderBy__ecore ul li').each(function () {
			const termo = $(this).attr('data-value');
			if (url.indexOf(termo) > -1) {
				const text = $(this).text();
				$('.orderBy__ecore__select--title p').text(text);
			}
		});

		$('.orderBy__ecore__select--title').on('click', function () {
			$(this)
				.parent()
				.find('.orderBy__ecore__select--option')
				.fadeToggle('linear');
			$('.orderBy__ecore').toggleClass('active');
		});

		$('.orderBy__ecore__select--option ul li').on('click', function () {
			const orderBy = $(this).attr('data-value');
			const text = $(this).text();

			$('.orderBy__ecore__select--title p').text(text);
			const url = window.location.href
			const order = new RegExp("O=");

			const res = order.test(url);
			if(res){
				const newUrl = url.split('O=');
				console.log(newUrl[0]);

				window.location = newUrl[0] + 'O=' + orderBy;
			} else if (window.location.search) {
				window.location = url + '&O=' + orderBy;
			} else {
				window.location = url + '?O=' + orderBy;
			}



		});
	}

	const grad = () => {
		$('.icon-list').on('click', function (e) {
			e.preventDefault();
			$('.vitrine.resultItemsWrapper .prateleira .prateleira').addClass('list');
			$(this).addClass('active');
			$('.icon-grid').removeClass('active');
		});
		$('.icon-grid').on('click', function (e) {
			e.preventDefault();
			$('.vitrine.resultItemsWrapper .prateleira .prateleira').removeClass('list');
			$(this).addClass('active');
			$('.icon-list').removeClass('active');
		});
	}

	const resultNumber = () => {
		const number = $('.searchResultsTime:last .resultado-busca-numero .value').text();
		if (number == 1) {
			$('.navCatalog__numberResult p').text(`${number} RESULTADO`);
		} else if (number == 0) {
			$('.navCatalog__numberResult p').text('NENHUM RESULTADO ENCONTRADO');
		} else {
			$('.navCatalog__numberResult p').text(`${number} RESULTADOS`);
		}
	}


	if($('h2.titulo-sessao')[0]){
		const text = $('h2.titulo-sessao').html();
		//alert(text);
		$('.breadCrumbBottom .container').prepend(`<h1 class="titulo-sessao">${text}</h1>`);
		$('h2.titulo-sessao').remove();
	}


	if ($('body').hasClass('catalog')) {
		resultNumber();
		grad();
		orderBy();
		showMobFilter();

		$(".navCatalog input[type='checkbox']").vtexSmartResearch({
			ajaxCallback: function () {
				$(".helperComplement").remove();
			}
		})

		// $('.product__shelf').each(function () {
		// 	$('.product__name .product__link', this).ellipsis({
		// 		lines: 1
		// 	});
	
		// });
	}
})
