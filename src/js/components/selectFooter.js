class Selectfooter {
    constructor() {
        this.selectFooter();
    }

    selectFooter() {
        $('a.search-button.search-button__footer--down, .dropdown-select').on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('active')) {
                $('.dropdown-box div#dropDownArea').fadeOut();
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
                $('.dropdown-box div#dropDownArea').fadeIn();
            }
        });
    }
}

window.filter = new Selectfooter();