export default (function () {
	if ($('body').hasClass('product')) {
		const thumbs = $('.thumbs');
		const fix_zoom = function () {
			window.LoadZoom = function (pi) {
				const zoomImage = $('.image-zoom');
				// zoomImage.jqzoom()
				$('.zoomPup, .zoomWindow, .zoomPreload').remove();
				if (!zoomImage.length) {
					const img = $('#image-main');
					const imgUrl = img.attr('src');
					img.wrap(`<a href="${imgUrl}" class="image-zoom" />`);
				}
				const zoom = $('#image')
					.addClass('easyzoom easyzoom--overlay')
					.easyZoom();
				window.zoomAPI = zoom.data('easyZoom');
				window.ImageControl = () => null;
			};
			LoadZoom(0);
		};
		$(fix_zoom);

		$(".share__item--facebook .share__link").attr(
			"href",
			`https://www.facebook.com/sharer/sharer.php?u=${
				window.location.href
			}`
		);

		$(".share__item--twitter .share__link").attr(
			"href",
			`http://twitter.com/share?text=Veja este livro&url=${
				window.location.href
			}`
		);

		const shelf__prev = '<button type=\'button\' class=\'slick-prev shelf__button\'><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M0 32.47l30.24 29.98 2.62-2.49L4.19 31.23 32.95 2.49 30.22 0 0 29.98v2.49z"/></svg></button>';
		const shelf__next = '<button type=\'button\' class=\'slick-next shelf__button\'><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M32.95 29.98L2.72 0 .1 2.49l28.66 28.74L0 59.96l2.73 2.49 30.22-29.98v-2.49z"/></svg></button>';

		$(document).ready(() => {
			$('.group.Especificacoes').tableanarchy({
				containerClass: 'new-structure',
			});

      if ($('div#caracteristicas').html() == '') {
        console.log('vazio');
        $('.product__specification').remove();
        $('.product__description').css('width', '100%');
      }

			const autores = $('.value-field.Autores').text();
			const htres = `<h3 class = "autores--pgprod"><span>Autor:</span> ${autores}</h3>`;
			const target = $('.product__name--pgprod');
			target.append(htres);

			const trigger = $('.product__description-title');
			const destination = trigger.next();
			trigger.click((e) => {
				$(e.target)
					.next()
					.toggleClass('is-visible');
				destination.hasClass('is-visible')
					? $(e.target)
						.find('i')
						.css('transform', 'rotate(90deg)')
					: $(e.target)
						.find('i')
						.css('transform', 'rotate(0deg)');
			});
		});

    $('.product__media-top--mobile .thumbs').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            infinite: true,
            vertical: true,
            arrows: true,
          },
        },
      ],
    });

    // REPEATING CODE HERE JUST TO GO LIVE
    $(() => {
      $(window).scroll(() => {
        const windowTop = $(window).scrollTop();
        const headerHeight = $('header').height();
        const contentBelow = $('main');
        windowTop > headerHeight - (headerHeight - 15)
          ? $('.header').addClass('header--is-sticky')
          : $('header').removeClass('header--is-sticky');
      });

      // Click Logo To Scroll To Top
      $('#logo').on('click', () => {
        $('html,body').animate(
          {
            scrollTop: 0,
          },
          500,
        );
      });
    });

    $('.shelf__carousel--full .prateleira > ul').slick({
      arrows: true,
      slideToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      dots: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            dots: false,
            infinite: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            arrows: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
    // Removing C letter on IBSN Code area
    const myCode = $('.value-field.Codigo-ISBN').html();
    $('.value-field.Codigo-ISBN').html(myCode.substring(1));

    class Product {
      constructor() {
        const self = this;
        window.ImageControl = () => null;
        this.skuJson = skuJson || skuJson_1;
        this.thumbsClickEvent();
        this.simulateShipping();

        if ($('.value-field.Autores')[0]) {
          let autores = $('.value-field.Autores').html();
          autores = autores.replace(/,/gi, '<br/>');
          $('.value-field.Autores').html(autores);
        }

				$('.js-product-qty-button').on('click', function (e) {
					e.preventDefault();
					const val = $(this).data('value');
					self.changeQuantity(val);
				});

				$('.js-product-qty-value').on('blur', function (e) {
					e.preventDefault();
					const val = +$(this).val();
					if (!val || val < 1) $(this).val(1);
				});
			}

			changeQuantity(val) {
				const currentVal = $('.js-product-qty-value').val();
				const newVal = +currentVal + +val;
				if (newVal) {
					$('.js-product-qty-value').val(newVal);
				}
			}

			thumbsClickEvent() {
				thumbs.on('click', 'a', function (e) {
					e.preventDefault();
					const imgUri = $(this).attr('rel');
					zoomAPI._init();
					zoomAPI.swap(imgUri, imgUri);
					if (!imgUri) {
						zoomAPI.teardown();
					}
					thumbs.find('a').removeClass('ON');
					$(this).addClass('ON');
				});
			}

			simulateShipping() {
				// window.OMSimulateShipping = new SimulateShipping()
			}
		}

		$(() => {
			window.OMProduct = new Product();
		});

		const buttonSumary = '<a href="" class= "button__preview">Ler Sumário</a>';
		$(buttonSumary).insertBefore('.buy-button');

    if ($(window).width() <= 799) {
      $('.thumbs li').each(function (index) {
        const url = $(this)
          .find('a')
          .find('img')
          .attr('src');
        const urlRaplace = url.replace('-55-55', '-600-600');
        $(this)
          .find('a')
          .find('img')
          .attr('src', urlRaplace);
      });
    }
    $('.product__shipping-link').click((e) => {
      $('.shipping-box').css('display', 'block');
    });
    $('.product__description-text').mCustomScrollbar({
      theme: 'inset-dark',
    });
  }
}());
