$(document).ready(function(){
    $('.menu__mobile-main-menu #has-sub').on('click', function(event){
        $(this).parent().find('.submenu').slideToggle();
    });

    $('.header__menu-icon').click(function(){
        $('body').addClass('menu-active');
    });

    $('.header__menu-icon--close-x').click(function(){
        $('body').removeClass('menu-active');
    });
});