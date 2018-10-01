$(() => {
  $(window).scroll(() => {
    const windowTop = $(window).scrollTop();
    const headerHeight = $('header').height();
    const contentBelow = $('main');
    windowTop > (headerHeight - (headerHeight - 15))
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
