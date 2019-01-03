class Home {
  constructor() {
    this.carroselOption();
  }

  carroselOption() {
    $('.filter__opt-item a').on('click', function (e) {
      e.preventDefault();
      const _this = $(this);
      const nameSelect = _this.attr('data-name');
      const nameText = _this.text();

      $('.filter__opt-item a').removeClass('active');
      _this.addClass('active');

      $('.section__shelf .shelf__carousel--full').each(function () {
        const nameSearch = $(this).attr('data-name');
        if (nameSearch == nameSelect) {
          $('.section__shelf .shelf__carousel--full').removeClass('active');
          $(this).addClass('active');
          $('.filter .filter__title').text(nameText);
        }
      });
    });
  }
}

$(document).ready(() => {
  if ($('body').hasClass('home')) {
    window.Home = new Home();
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

    $('.shelf__carousel--full .prateleira > ul').slick({
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
  }
  $('.product-field ul').slick('unslick');
});
