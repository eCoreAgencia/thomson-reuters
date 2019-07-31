

$(document).ready(() => {
  if ($('body').hasClass('home')) {

	 $('.filter__opt-item a').on('click', function (e) {
	 	e.preventDefault();
	 	const _this = $(this);
	 	const nameSelect = _this.attr('data-name');
	 	const nameText = _this.text();

	 	_this.parents('.filter__opt').find('.filter__opt-item a').removeClass('active');
	 	_this.addClass('active');

	 	$('.section__shelf .shelf__carousel--full').each(function () {
	 		const nameSearch = $(this).attr('data-name');
	 		if (nameSearch == nameSelect) {
	 			$(this).parents('.section__page.section__shelf').find('.shelf__carousel--full').removeClass('active');
	 			$(this).addClass('active');
	 			_this.parents('.filter').find('.filter__title').text(nameText);
	 		}
	 	});
	 });

    if ($('li.helperComplement')[0]) {
      $('li.helperComplement').remove();
    }
    $('.banner--full').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
    $('.banner--mobile').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });

    $('.shelf__banners').slick({
      mobileFirst: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 800,
          settings: 'unslick',
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });



	if($('body').hasClass('page--countdown')) {
		$('.shelf__carousel--countdown ul').slick({
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true

		});
	}

	$('.shelf__carousel--full .prateleira > ul').slick({
		arrows: true,
		slideToShow: 1,
		slidesToScroll: 1,
		mobileFirst: true,
		dots: true,
		infinite: false,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
					dots: false,
					infinite: false,
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
					infinite: false,
					arrows: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					infinite: false,
					arrows: false,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	});


    $('.category-nav ul').slick({
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      mobileFirst: true,
      dots: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
	$('.section__split .prateleira ul').addClass('most-visited__list');

	$('.optionSelect__title').on('click', function(){
		$(this).parent().find('.optionSelect__select').toggleClass('active');
	});

	$('.optionSelect__select a').on('click', function(e){
		e.preventDefault()
		var id = $(this).parent().data('id');
		$('.optionSelect__title p').text($(this).text());
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "/buscapagina?fq=C:1/" + id + "/&PS=4&sl=d8869f9f-40b4-d582-593c-a536d2c52637&cc=4&sm=0&PageNumber=1",
			"method": "GET",
			"processData": false,
			"contentType": false
		}

		$.ajax(settings).done(function (response) {

			$('.optionSelect__select').removeClass('active');
			$('.shelf__visited').html(response);

			$('.product__watch').each(function () {
				$('.product__watch-name .product__watch-link', this).ellipsis({
					lines: 2
				});
				$('.product__watch-author li', this).ellipsis({
					lines: 1
				});
			});
			
		});
	})
  }
});
