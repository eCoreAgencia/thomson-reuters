class Catalog {
  constructor() {
    if ($('body').hasClass('catalog')) {
      this.resultNumber();
      this.grad();
      this.orderBy();
      this.showMobFilter();
    }
  }

  resultNumber() {
    const number = $('.searchResultsTime:last .resultado-busca-numero .value').text();
    if (number == 1) {
      $('.navCatalog__numberResult p').text(`${number} RESULTADO`);
    } else if (number == 0) {
      $('.navCatalog__numberResult p').text('NENHUM RESULTADO ENCONTRADO');
    } else {
      $('.navCatalog__numberResult p').text(`${number} RESULTADOS`);
    }
  }

  grad() {
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

  orderBy() {
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
      window.location = `${window.location.pathname}?O=${orderBy}`;
    });
  }

  showMobFilter() {
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
}

window.menu = new Catalog();
