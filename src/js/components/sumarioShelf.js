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
        $('.shelf .product__shelf').each(function() {
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
					_this.find('a.button__preview').show();
                    _this.find('a.button__preview').attr('href', link);
					// _this.find('a.button__preview').attr('target', '_blank');
                }
            });
        });
    }
}

window.filter = new SumarioShelf();





// <!-- Button trigger modal -->
// <button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
//   Launch demo modal
// </button>

// <!-- Modal -->
// <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
//         <h4 class="modal-title" id="myModalLabel">Modal title</h4>
//       </div>
//       <div class="modal-body">
//         <div style="text-align: center;">
// <iframe src="http://docs.google.com/gview?url=http://www.pdf995.com/samples/pdf.pdf&embedded=true"
// style="width:500px; height:500px;" frameborder="0"></iframe>
// </div>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
