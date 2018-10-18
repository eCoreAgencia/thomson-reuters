$(document).ready(() => {
  if ($('body').hasClass('home')) {
    if ($('li.helperComplement')[0]) {
      $('li.helperComplement').remove();
    }
    $('.banner--full').slick({});

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
          settings: "unslick"
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

    $('.banner--mobile').slick({
      arrows: false,
      slidesToScroll: 1,
      infinite: true,
      dots: true,
      draggable: true,
    });
    // const shelf__prev =			'<button type=\'button\' class=\'slick-prev shelf__button\'><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M0 32.47l30.24 29.98 2.62-2.49L4.19 31.23 32.95 2.49 30.22 0 0 29.98v2.49z"/></svg></button>';
    // const shelf__next =			'<button type=\'button\' class=\'slick-next shelf__button\'><svg data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.96 62.45"><path fill="#9e9e9e" d="M32.95 29.98L2.72 0 .1 2.49l28.66 28.74L0 59.96l2.73 2.49 30.22-29.98v-2.49z"/></svg></button>';

    $('.shelf__carousel--full ul').slick({
      arrows: true,
      slideToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      dots: true,
      infinite: false,
      responsive: [
        {
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
	  dots: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            dots: false,
			infinite: false,
			arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
			infinite: false,
			arrows: false,
          },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    });
  }
});
