
$(document).ready(() => {
  if($('body').hasClass('institucional')){
    let buttonToOpen = $('.list > li a'),
    list =$('.list > li > a').parent().find('ul');
    list.hasClass('is-active') ? list.toggle() : list.css('display','none');

	buttonToOpen.click(function(e) {
      let listToExpand = $(e.target).parent().find('ul');
      let arrow = $(e.target).find('i');
      listToExpand.toggleClass('is-active');
      listToExpand.toggle();
      list.hasClass('is-active') ? arrow.css({'transform': ' rotate(90deg)'})  :  arrow.css({'transform': ' rotate(0deg)'});
	});

	if(window.location.hash){
		const text = window.location.hash.replace('#', '');

		if($('.list__block').hasClass(text)){
			$('.list__block.'+text+' .list__content').addClass('is-active');
		}
	}

	$('.institucional__item a').on('click', function(){
		var href = $(this).attr('href').replace('#', '');

		if ($('.list__block').hasClass(text)) {
			$('.list__block.' + text + ' .list__content').addClass('is-active');
		}

	});


  }
});

