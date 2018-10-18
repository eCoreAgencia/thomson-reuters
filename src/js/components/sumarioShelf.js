class SumarioShelf {
    constructor() {
        this.sumario();
    }

    sumario() {
        $('.shelf ul li').each(function() {
            let idProduct = $(this).find('.product-shelf__id').attr('data-product-id');
            var _this = $(this);
            $.ajax({
                url: "/api/catalog_system/pub/products/search?fq=productId:"+idProduct,
                type: "GET",
                headers: {
                    Accept: "application/vnd.vtex.masterdata.v10+json",
                    "Content-Type": "application/vnd.vtex.masterdata.v10+json"
                }
            }).done(function (data) {
                let sumario = data[0].Sumário;
                if(typeof sumario === "undefined") {
                    _this.find('a.button__preview').remove();
                } else {
                    var link = sumario[0];
                    console.log(sumario[0])
                    _this.find('a.button__preview').attr('href', link);
                }
            });
        });
    }
}

window.filter = new SumarioShelf();