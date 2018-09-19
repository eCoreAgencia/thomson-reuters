
$(document).ready(function(){
  if($('body').hasClass('not-found')){
    if($('li.helperComplement')[0]){
      $('li.helperComplement').remove();
    }
    $('.shelf__carousel--full ul').slick({
      arrows: true,
      slideToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      variableWidth: true,
    });
  }
})
