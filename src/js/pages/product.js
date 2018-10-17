class Product {
    constructor() {
        if($('body').hasClass('product')) {
            this.sumario();
        }
    }

    sumario() {
        let idProduct = $('input#___rc-p-id').attr('value');

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
                $('a.button__preview').remove();
            } else {
                var link = sumario[0];

                $('a.button__preview').attr('href', link);
            }
        });
    }
}

window.filter = new Product();