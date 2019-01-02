$(document).ready(() => {
  if ($('body').hasClass('login')) {
    $('body').on('click', '.vtexIdUI-page .close', () => {
      window.location.href = '/';
    });
  }
  vtexjs.checkout.getOrderForm().done((orderForm) => {
    const ifLogged = orderForm.loggedIn;
    if (ifLogged) {
      // MOBILE
      const emailLimited = orderForm.clientProfileData.email.length;
      const elementWelcomeMobile = orderForm.clientProfileData.email;
      if (emailLimited > 15) {
        console.log(elementWelcomeMobile);

        $('.menu__mobile-welcome').text(`Bem Vindo,${elementWelcomeMobile.substr(0, 18)}...`);
      }

      //   DESKTOP

      const elementWelcome = `<a href="/account">Bem Vindo, ${
        orderForm.clientProfileData.email
      }</a>`;
      $('.tip-bar__login').html(elementWelcome);
    }
  });
});
