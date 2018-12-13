$(document).ready(function(){
    $('.menu__mobile-main-menu #has-sub').on('click', function(event){
        $(this).parent().find('.submenu').slideToggle();
    });

    $('.header__menu-icon').click(function(){
        $('body').toggleClass('menu-active');
    });
});
