$(document).ready(() => {
  if ($('body').hasClass('login')) {
    const vtexCloseButton = $('.close.vtexIdUI-close.ng-hide');

    vtexCloseButton.click((e) => {
      window.location = '/';
      return false;
    });
  }
});
