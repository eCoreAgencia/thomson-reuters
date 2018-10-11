import axios from 'axios';
// juridico@infracommerce.com.br
// vtexappkey-thomsonreuters-DWFZCV

// QEDYCMNQFUFMFMWTPMXWXTRAWHBIVDNWACNVOBKZXUOHLPQZKNRFGDJWNCBULFVCHJLDYAEOCXZCFJPHRCYHLHPXSRIMZPORYMACDNBJJDDJDGRDNUDJHOQAUOKHSSOM

class ProductSumary {
	constructor(){
		this.shelf = $('.prateleira ul li');
		this.idProdShelf = $('.product-shelf__id').attr('data-product-id');
		this.getDomIds()
	}
	getDomIds() {
		this.shelf.each(()=> {
			let idProd = $(this).find(this.idProdShelf);
			console.log(idProd);
		});
	}
}

export default ProductSumary;


// 	axios.get(`http://api.vtexcrm.com.br/thomsonreuters/dataentities/PS/search?_where=idProd=${}&_fields=idProd,urlProd`)
// 		.then(function(response){
// 			console.log(response.data); // ex.: { user: 'Your User'}
// 			console.log(response.status); // ex.: 200
// 		});



// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "http://api.vtexcrm.com.br/thomsonreuters/dataentities/PS/search?_where=idProd=13&_fields=idProd,urlProd",
// 	"method": "GET",
// 	"headers": {
// 	  "Content-Type": "application/json",
// 	  "Accept": "application/vnd.vtex.ds.v10+json"
// 	}
//   }
//   $.ajax(settings).done(function (response) {
// 	console.log(response);
//   });
