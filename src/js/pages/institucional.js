
$(document).ready(() => {
  if($('body').hasClass('institucional')){
    let buttonToOpen = $('.list > li a'),
    list =$('.list > li > a').parent().find('ul'),
    sideitem = $('.institucional__item ');
    console.log(sideitem);

    list.hasClass('is-active') ? list.toggle() : list.css('display','none');

    buttonToOpen.click(function(e) {
      let listToExpand = $(e.target).parent().find('ul');
      let arrow = $(e.target).find('i');

      listToExpand.toggleClass('is-active');
      listToExpand.toggle();

      // list.hasClass('is-active') ?  arrow.css({'transform': ' rotate(90deg)'})  :  arrow.css({'transform': ' rotate(0deg)'});
      list.hasClass('is-active') ? arrow.css({'transform': ' rotate(90deg)'})  :  arrow.css({'transform': ' rotate(0deg)'});
    });



    sideitem.click((e) => {
      e.preventDefault();
      return false;
      let linkSelected = $(this).data("link");
      console.log(linkSelected);

    });
  }
});

