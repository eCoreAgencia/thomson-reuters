$(document).ready(() => {
  if ($('body').hasClass('login')) {
    $('body').on('click', '.vtexIdUI-page .close',  () => {
      window.location.href = '/';
    });
  }
});
