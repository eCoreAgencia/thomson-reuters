$(document).ready(() => {
  if ($('body').hasClass('empty-search')) {
    let word = decodeURI(window.location.search);
    word = word.replace('?ft=', '');
    console.log(word);
    $('.box-emptySearch p span em').text(word);
  }
});

$(document).ready(() => {
  if ($('body').hasClass('empty-search')) {
    if ($('li.helperComplement')[0]) {
      $('li.helperComplement').remove();
    }
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
  }
});
