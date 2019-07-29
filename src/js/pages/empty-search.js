$(document).ready(() => {
  if ($('body').hasClass('empty-search')) {
    let word = decodeURI(window.location.search);
    word = word.replace('?ft=', '');
    //console.log(word);
    $('span.term').text('"' + word + '"');
    
    $('.bread-crumb ul').append('<li typeof="v:Breadcrumb"><a href="#" class="active" rel="v:url" property="v:title">RESULTADOS PARA "'+ word +'"</a></li>')
  }

});
