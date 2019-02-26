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

export const getProductShelfByTerm = (term) => {

	//getProductsByTerm.cache = getProductsByTerm.cache || {}
	const endpoint = `/buscapagina?ft=${term}&PS=6&sl=65c15678-2bbe-72e0-3aa6-0aa635db2f86&cc=50&sm=0&PageNumber=1`;

	const text = `<html><head><META NAME="ROBOTS" CONTENT="NOINDEX, FOLLOW"></head><body><div class="prateleira n6colunas"><ul><li layout="65c15678-2bbe-72e0-3aa6-0aa635db2f86" class="area-de-interesse">
<div class="product product--shelf"><span class="flags"></span><span class="product__id" data-product-id="134"></span>
  <div class="product__header">
    <div class="product__media"><a class="product__link" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-17-processo-do-trabalho-5-edicao-9788553210497/p"><img src="https://thomsonreuters.vteximg.com.br/arquivos/ids/155604-500-720/9788553210497.jpg?v=636753740548430000" width="500" height="720" alt="9788553210497" id="" /></a></div>
    <div class="product__actions"><a class="button product__link" title="Cole&#231;&#227;o Elementos do Direito Volume 17 - Processo do Trabalho 5&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-17-processo-do-trabalho-5-edicao-9788553210497/p">Ver Produto</a><a class="button button--primary product__buy" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-17-processo-do-trabalho-5-edicao-9788553210497/p" data-product-id="134">Compre Rápido</a></div>
  </div>
  <div class="product__reviews"></div>
  <div class="product__info">
    <h3 class="product__name"><a class="product__link" title="Cole&#231;&#227;o Elementos do Direito Volume 17 - Processo do Trabalho 5&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-17-processo-do-trabalho-5-edicao-9788553210497/p">Cole&#231;&#227;o Elementos do Direito Volume 17 - Processo do Trabalho 5&#170; Edi&#231;&#227;o</a></h3>
    <div class="product__price">
  <div class="price">
    <span class="price__list">R$ 126,00 no boleto </span>
      </div>

    </div>
  </div>
  <div class="product__category"><a class="button" href="https://thomsonreuters.vtexcommercestable.com.br/area-de-interesse/oab---concursos">OAB / Concursos</a></div>
</div>
</li><li id="helperComplement_134" style="display:none" class="helperComplement"></li><li layout="65c15678-2bbe-72e0-3aa6-0aa635db2f86" class="area-de-interesse">
<div class="product product--shelf"><span class="flags"></span><span class="product__id" data-product-id="99"></span>
  <div class="product__header">
    <div class="product__media"><a class="product__link" href="https://thomsonreuters.vtexcommercestable.com.br/clt-comparada-urgente-2-edicao-9788520368718/p"><img src="https://thomsonreuters.vteximg.com.br/arquivos/ids/155546-500-720/clt-comparada-urgente-2-edicao-9788520368718.jpg?v=636740779404070000" width="500" height="720" alt="CLT-Comparada-Urgente---2ª-Edicao" id="" /></a></div>
    <div class="product__actions"><a class="button product__link" title="CLT Comparada Urgente - 2&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/clt-comparada-urgente-2-edicao-9788520368718/p">Ver Produto</a><a class="button button--primary product__buy" href="https://thomsonreuters.vtexcommercestable.com.br/clt-comparada-urgente-2-edicao-9788520368718/p" data-product-id="99">Compre Rápido</a></div>
  </div>
  <div class="product__reviews"></div>
  <div class="product__info">
    <h3 class="product__name"><a class="product__link" title="CLT Comparada Urgente - 2&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/clt-comparada-urgente-2-edicao-9788520368718/p">CLT Comparada Urgente - 2&#170; Edi&#231;&#227;o</a></h3>
    <div class="product__price">
  <div class="price">
    <span class="price__list">R$ 205,00 no boleto </span>
          <span class="price__instament">
        2X R$ 71,75 sem juros
      </span>
      </div>

    </div>
  </div>
  <div class="product__category"><a class="button" href="https://thomsonreuters.vtexcommercestable.com.br/area-de-interesse/trabalho">Trabalho</a></div>
</div>
</li><li id="helperComplement_99" style="display:none" class="helperComplement"></li><li layout="65c15678-2bbe-72e0-3aa6-0aa635db2f86" class="area-de-interesse">
<div class="product product--shelf"><span class="flags"></span><span class="product__id" data-product-id="100"></span>
  <div class="product__header">
    <div class="product__media"><a class="product__link" href="https://thomsonreuters.vtexcommercestable.com.br/clt-organizada-7-edicao-9788554947026/p"><img src="https://thomsonreuters.vteximg.com.br/arquivos/ids/155547-500-720/clt-organizada-7ed-9788554947026.jpg?v=636740779437870000" width="500" height="720" alt="CLT-Organizada---7ª-Edicao" id="" /></a></div>
    <div class="product__actions"><a class="button product__link" title="CLT Organizada - 7&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/clt-organizada-7-edicao-9788554947026/p">Ver Produto</a><a class="button button--primary product__buy" href="https://thomsonreuters.vtexcommercestable.com.br/clt-organizada-7-edicao-9788554947026/p" data-product-id="100">Compre Rápido</a></div>
  </div>
  <div class="product__reviews"></div>
  <div class="product__info">
    <h3 class="product__name"><a class="product__link" title="CLT Organizada - 7&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/clt-organizada-7-edicao-9788554947026/p">CLT Organizada - 7&#170; Edi&#231;&#227;o</a></h3>
    <div class="product__price">
  <div class="price">
    <span class="price__list">R$ 239,00 no boleto </span>
          <span class="price__instament">
        4X R$ 50,78 sem juros
      </span>
      </div>

    </div>
  </div>
  <div class="product__category"><a class="button" href="https://thomsonreuters.vtexcommercestable.com.br/area-de-interesse/trabalho">Trabalho</a></div>
</div>
</li><li id="helperComplement_100" style="display:none" class="helperComplement"></li><li layout="65c15678-2bbe-72e0-3aa6-0aa635db2f86" class="area-de-interesse">
<div class="product product--shelf"><span class="flags"></span><span class="product__id" data-product-id="75"></span>
  <div class="product__header">
    <div class="product__media"><a class="product__link" href="https://thomsonreuters.vtexcommercestable.com.br/revisao-e-treino-2-fase-oab-caderno-de-direito-do-trabalho-4-edicao-9788554947040/p"><img src="https://thomsonreuters.vteximg.com.br/arquivos/ids/155522-500-720/revisao-e-treino-2-fase-oab-caderno-de-direito-do-trabalho-4-edicao-9788554947040.jpg?v=636740778412600000" width="500" height="720" alt="Revisao-e-Treino-2ª-Fase-OAB---Caderno-de-Direito-do-Trabalho---4ª-Edicao" id="" /></a></div>
    <div class="product__actions"><a class="button product__link" title="Revis&#227;o e Treino 2&#170; Fase OAB - Caderno de Direito do Trabalho - 4&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/revisao-e-treino-2-fase-oab-caderno-de-direito-do-trabalho-4-edicao-9788554947040/p">Ver Produto</a><a class="button button--primary product__buy" href="https://thomsonreuters.vtexcommercestable.com.br/revisao-e-treino-2-fase-oab-caderno-de-direito-do-trabalho-4-edicao-9788554947040/p" data-product-id="75">Compre Rápido</a></div>
  </div>
  <div class="product__reviews"></div>
  <div class="product__info">
    <h3 class="product__name"><a class="product__link" title="Revis&#227;o e Treino 2&#170; Fase OAB - Caderno de Direito do Trabalho - 4&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/revisao-e-treino-2-fase-oab-caderno-de-direito-do-trabalho-4-edicao-9788554947040/p">Revis&#227;o e Treino 2&#170; Fase OAB - Caderno de Direito do Trabalho - 4&#170; Edi&#231;&#227;o</a></h3>
    <div class="product__price">
  <div class="price">
    <span class="price__list">R$ 136,00 no boleto </span>
      </div>

    </div>
  </div>
  <div class="product__category"><a class="button" href="https://thomsonreuters.vtexcommercestable.com.br/area-de-interesse/oab---concursos">OAB / Concursos</a></div>
</div>
</li><li id="helperComplement_75" style="display:none" class="helperComplement"></li><li layout="65c15678-2bbe-72e0-3aa6-0aa635db2f86" class="area-de-interesse">
<div class="product product--shelf"><span class="flags"></span><span class="product__id" data-product-id="260"></span>
  <div class="product__header">
    <div class="product__media"><a class="product__link" href="https://thomsonreuters.vtexcommercestable.com.br/leis-trabalhistas-comentadas-1-edicao-9788553211531/p"><img src="https://thomsonreuters.vteximg.com.br/arquivos/ids/155779-500-720/leis-trabalhistas-comentadas-1-edicao-9788553211531.jpg?v=636758250420100000" width="500" height="720" alt="LEIS-TRABALHISTAS-COMENTADAS-NAHAS-ETQ" id="" /></a></div>
    <div class="product__actions"><a class="button product__link" title="Leis Trabalhistas Comentadas - 1&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/leis-trabalhistas-comentadas-1-edicao-9788553211531/p">Ver Produto</a><a class="button button--primary product__buy" href="https://thomsonreuters.vtexcommercestable.com.br/leis-trabalhistas-comentadas-1-edicao-9788553211531/p" data-product-id="260">Compre Rápido</a></div>
  </div>
  <div class="product__reviews"></div>
  <div class="product__info">
    <h3 class="product__name"><a class="product__link" title="Leis Trabalhistas Comentadas - 1&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/leis-trabalhistas-comentadas-1-edicao-9788553211531/p">Leis Trabalhistas Comentadas - 1&#170; Edi&#231;&#227;o</a></h3>
    <div class="product__price">
  <div class="price">
    <span class="price__list">R$ 125,00 no boleto </span>
          <span class="price__instament">
        2X R$ 50,00 sem juros
      </span>
      </div>

    </div>
  </div>
  <div class="product__category"><a class="button" href="https://thomsonreuters.vtexcommercestable.com.br/area-de-interesse/trabalho">Trabalho</a></div>
</div>
</li><li id="helperComplement_260" style="display:none" class="helperComplement"></li><li layout="65c15678-2bbe-72e0-3aa6-0aa635db2f86" class="area-de-interesse last">
<div class="product product--shelf"><span class="flags"></span><span class="product__id" data-product-id="441"></span>
  <div class="product__header">
    <div class="product__media"><a class="product__link" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-09-direito-do-trabalho-5-edicao-9788520366363/p"><img src="https://thomsonreuters.vteximg.com.br/arquivos/ids/155960-500-720/9788520366363.jpg?v=636778017534570000" width="500" height="720" alt="Colecao-Elementos-do-Direito-Volume-09---Direito-do-Trabalho---5ª-Edicao" id="" /></a></div>
    <div class="product__actions"><a class="button product__link" title="Cole&#231;&#227;o Elementos do Direito Volume 09 - Direito do Trabalho - 5&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-09-direito-do-trabalho-5-edicao-9788520366363/p">Ver Produto</a><a class="button button--primary product__buy" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-09-direito-do-trabalho-5-edicao-9788520366363/p" data-product-id="441">Compre Rápido</a></div>
  </div>
  <div class="product__reviews"></div>
  <div class="product__info">
    <h3 class="product__name"><a class="product__link" title="Cole&#231;&#227;o Elementos do Direito Volume 09 - Direito do Trabalho - 5&#170; Edi&#231;&#227;o" href="https://thomsonreuters.vtexcommercestable.com.br/colecao-elementos-do-direito-volume-09-direito-do-trabalho-5-edicao-9788520366363/p">Cole&#231;&#227;o Elementos do Direito Volume 09 - Direito do Trabalho - 5&#170; Edi&#231;&#227;o</a></h3>
    <div class="product__price">
  <span class="product__unavailable">Indisponível</span>

    </div>
  </div>
  <div class="product__category"><a class="button" href="https://thomsonreuters.vtexcommercestable.com.br/area-de-interesse/oab---concursos">OAB / Concursos</a></div>
</div>
</li><li id="helperComplement_441" style="display:none" class="helperComplement"></li></ul></div></body></html>`

	return new Promise((resolve, reject) => {
		if (isLocalhost) return resolve(text)
		else {
			return fetch(endpoint)
				.then(data => {
					const result = data.text()
					return resolve(result)
				})
				.catch(err => reject(err))
		}
		return reject("Couldn't get product.")
	})


}

export const getProductsById = (id) => {

	//getProductsByTerm.cache = getProductsByTerm.cache || {}
	const endpoint = `/api/catalog_system/pub/products/search?fq=productId:${id}`;


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
