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
		});
	}
}

export default ProductSumary;


