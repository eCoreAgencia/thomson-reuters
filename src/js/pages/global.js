$(document).ready(function() {
    $(".product__shelf a.product__link").each(function(i){
		let len = $(this).text().length;
        if(len>60) {
            $(this).text($(this).text().substr(0,60)+'...');
        }
    });
})