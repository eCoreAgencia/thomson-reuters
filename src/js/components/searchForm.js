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
        let urlSeach = "/busca?fq=specificationFilter_"+selectChange+":isbn"+termo;
        window.location = urlSeach;
      } else {
        let urlSeach = "/busca?fq=specificationFilter_"+selectChange+":"+termo;
        window.location = urlSeach;
      }

		}
	}
}


$(document).ready(function() {
	$('.orderBy__ecoreHeader__select--title').on('click', function() {
		let _this = $(this);
		_this.parents('.orderBy__ecoreHeader').find('.orderBy__ecoreHeader__select--option').toggleClass('active');

		let selectChange = $('#header-form .orderBy__ecoreHeader__select--title').attr('data-id');
		
		if(!selectChange == "todos") {
			$('.search-form__result-list').css('display', 'none !important');
		}
	});

	$('.orderBy__ecoreHeader__select--option ul li').on('click', function() {
		let _this  = $(this);
		let dataId = _this.attr('data-id');
		let text   = _this.text(); 

		_this.parents('.orderBy__ecoreHeader').find('.orderBy__ecoreHeader__select--title p').text(text);
		_this.parents('.orderBy__ecoreHeader').find('.orderBy__ecoreHeader__select--title p').attr('data-id',dataId);
		_this.parents('.orderBy__ecoreHeader__select--option').removeClass('active');
	});
	
	$('.search-bar .control button').on('click', function(e) {
		e.preventDefault();

		let selectChange = $('header .orderBy__ecoreHeader__select--title p').attr('data-id');
		let termo		 = $('header input').val();
		console.log(selectChange);
		
		window.searchFilter = new searchFilter(selectChange, termo);
  });

  $( "form.search-form" ).on("submit", function(event) {
    event.preventDefault();

    let selectChange = $('header .orderBy__ecoreHeader__select--title p').attr('data-id');
		let termo		 = $('header input').val();
		console.log(selectChange);
		
		window.searchFilter = new searchFilter(selectChange, termo);
  });
})