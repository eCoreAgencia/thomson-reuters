class Selectfooter {
    constructor() {
        this.selectFooter();
    }

    selectFooter() {
        $('a.search-button.search-button__footer--down, .dropdown-select').on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('active')) {
                $('.dropdown-box div#dropDownArea').fadeOut();
                $('a.search-button.search-button__footer--down').css('transform', 'rotate(0deg)');
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $('.dropdown-box div#dropDownArea').fadeIn();
                $('a.search-button.search-button__footer--down').css('transform', 'rotate(180deg)');
            }
        });
    }
}

window.filter = new Selectfooter();