import requestHttp from './requestHttp';
import * as api from './endpoint';
import {
	isLocalhost
} from '../utils';

export default class vtexRequest {




  async getCategoryTree(level) {
    try {
      const http = new requestHttp();
      const response = await http.get(api.vtexCategoryTree(level));
      const categoryTree = await response.json();
      return categoryTree;
    } catch (err) {
      console.log(err);
    }

  }

  async getProductsByCategoryId(id) {
    try {
      const http = new requestHttp();
      const response = await http.get(api.vtexSeachProductByCategory(id));
      const products = await response.json();
      return products;
    } catch (err) {
      console.log(err);
    }
  }

  async getProductById(id) {
    try {
      const http = new requestHttp();
      const response = await http.get(api.vtexSeachProductByCategory(id));
      const product = await response.json();
      return product;
    } catch (err) {
      console.log(err);
    }
  }

  async getProductWithVariations(id) {
    try {
      const http = new requestHttp();
      const response = await http.get(api.vtexProductWithVariations(id));
      const product = await response.json();
      return product;
    } catch (err) {
      console.log(err);
    }
  }

  async getProductWithShelfId(query, shelfId, ps) {
    try {
      const http = new requestHttp();
      const response = await http.get(api.vtexSearchPage(query, shelfId, ps));
      const search = await response.text();
      return search;
    } catch (err) {
      console.log(err);
    }
  }

  // https://thomsonreuters.vtexcommercestable.com.br/api/catalog_system/pub/products/search?ft=
}

export const getProductsByTerm = (term) => {

	//getProductsByTerm.cache = getProductsByTerm.cache || {}
	const endpoint = `/api/catalog_system/pub/products/search?ft=${term}`;


	return new Promise((resolve, reject) => {
		if (isLocalhost) return resolve(window.products)
		else {
			return fetch(endpoint)
				.then(data => {
					const result = data.json()
					return resolve(result)
				})
				.catch(err => reject(err))
		}
		return reject("Couldn't get product.")
	})


}
