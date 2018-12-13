class Events {
    constructor() {
        $(document).ready(function() {
            if($('body').hasClass('.evento.catalog')) {
                this.getDescription();
                $('.helperComplement').remove();
            }
        })
    }

    getDescription() {
        $('.productEvents ul li').each(function() {
            let _this = $(this);
            let idProduct = $(this).find('.product-shelf__id').attr('data-product-id');

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "/api/catalog_system/pub/products/search?fq=productId:"+idProduct,
                "method": "GET",
            }
              
            $.ajax(settings).done(function (response) {
                _this.find('.productEvents__description h4').text(response[0].description);
            });
        })
    }
}

window.Events = new Events();