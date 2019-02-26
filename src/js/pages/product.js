class Product {
  constructor(link) {
    this.renderSumario(link);
    this.events();
    if ($('body').hasClass('product')) {
      this.sumario();
    }
  }

  sumario() {
    const idProduct = $('input#___rc-p-id').attr('value');

    $.ajax({
      url: `/api/catalog_system/pub/products/search?fq=productId:${idProduct}`,
      type: 'GET',
      headers: {
        Accept: 'application/vnd.vtex.masterdata.v10+json',
        'Content-Type': 'application/vnd.vtex.masterdata.v10+json',
      },
    }).done((data) => {
      const sumario = data[0].Sumário;

      if (typeof sumario === 'undefined') {
        $('.product__action-bottom--pgprod a.button__preview').remove();
      } else {
        const link = sumario[0];
        $('.product__action-bottom--pgprod a.button__preview').attr('href', link);
      }
    });
  }

  events() {
    $('body').on('click', 'a.button__preview', (e) => {
      e.preventDefault();
      const link = $(e.target).attr('href');
      this.renderSumario(link);
      $('.modal-sumary').fadeIn();
    });
    $('body').on('click', '.modal-sumary__content .close', () => {
	  $('.modal-sumary').fadeOut();
	  $('.modal-sumary__content .close').show();
    });
  }

  renderSumario(link) {
    const modalContent = `<iframe src="http://docs.google.com/gview?url=${link}&embedded=true"
	style="" frameborder="0"></iframe>`;
    $('.modal-sumary__container').html(modalContent);
  }
}

window.product = new Product();
