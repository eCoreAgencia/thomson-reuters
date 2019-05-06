$(document).ready(() => {
  if ($('body').hasClass('empty-search')) {
    let word = decodeURI(window.location.search);
    word = word.replace('?ft=', '');
    console.log(word);
    $('.box-emptySearch p span em').text(word);
  }

});
