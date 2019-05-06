import axios from 'axios';
import {
  isLocalhost,
  vtexSearchPageEndpoint
} from '../utils';

export default class SearchForm {

  constructor(element) {

    this.form = $(element);
    this.shelfId = 'ebccb84c-3bc2-590c-7999-9849b0cbd4d5';
    this.init()
  }

  init() {
	  alert('');
    let self = this;
    const input = this.form.find('.input');
    this.listHtml(this.form)

    input.on('keyup focus', function () {
      $('.search-form').addClass('search-form--focus');
      const list = $('.search-form__result-list');
      const word = $(this).val();
      console.log(word)
      if (word.length >= 3) self.getSearchResult(word)
    })

    input.on('blur', function () {
      const list = $('.search-form__result-list');
      $('.search-form').removeClass('search-form--focus');
      setTimeout(function () {
        list.hide();
        list.empty();
      }, 500)

    })

  }

  listHtml(element) {
    const resultWrapper = `<div class="search-form__result-list"></div>`;
    element.append(resultWrapper);
  }

  getSearchResult(query) {
    let self = this;
    const endpoint = isLocalhost ? `/product.html` : vtexSearchPageEndpoint(query, this.shelfId, 3);
    axios.get(endpoint)
      .then(data => self.appendResultList(data.data))
      .catch(error => self.appendResultList(`<span class="no-result">Não foi encontrado nenhum resultado</span>`))

  }

  appendResultList(resultList) {
    if (!resultList) resultList = `<span>Não foi encontrado nenhum resultado</span>`;
    const list = $('.search-form__result-list');

    list.empty();
    list.show();
    list.append(resultList);

  }



}

class searchFilter {
  	constructor(selectChange, termo) {
		this.search(selectChange, termo);
	}

	search(selectChange, termo) {
		console.log(selectChange)
		console.log(termo)

		if(selectChange == 0 || selectChange == "todos") {
			let urlSeach = "/busca?ft="+termo;
			window.location = urlSeach;
		} else {
      if(selectChange == 23) {
        let urlSeach = "/busca?fq=specificationFilter_"+selectChange+":c"+termo;
        window.location = urlSeach;
      } else {
        let urlSeach = "/busca?fq=specificationFilter_"+selectChange+":"+termo;
        window.location = urlSeach;
      }

		}
	}
}


$(document).ready(function() {

	const isISBN = (n) => {
		return /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/gm.test(n);
	}

	$('.search-form').on('submit', function (e) {
		e.preventDefault();
		const term = $('.search-form input').val().replace(' ', '');
	  	if (isISBN(term)) {
			let urlSearch = "/busca?fq=specificationFilter_23:c" + term;
	  		window.location = urlSearch;
	  	}else{
			window.location = `/busca?ft=${term}`;
		}
  })


})
