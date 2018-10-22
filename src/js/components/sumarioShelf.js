class SumarioShelf {
    constructor() {
        if($('body').hasClass('catalog')) {
            setTimeout(() => {
                this.sumario();   
            }, 50000);
        } else {
            this.sumario();
        }
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
                console.log(data)
                if(typeof sumario === "undefined") {
                    _this.find('a.button__preview').remove();
                } else {
                    var link = sumario[0];
                    console.log(sumario[0])
                    _this.find('a.button__preview').attr('href', link);
                    _this.find('a.button__preview').attr('target', '_blank');
                }
            });
        });
    }
}

window.filter = new SumarioShelf();