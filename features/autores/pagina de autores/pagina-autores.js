$(document).ready(function(event){
	// Render Page Begin //
	var store = 'api';
	var name = 'AT';
	var fields = 'fotoautor,id,nomeautor,descricaoautor,link';
	var urlProtocol = window.location.protocol;
	var apiUrl = urlProtocol + '/' + store + '/dataentities/' + name + '/search/?_fields='+ fields;

	var renderAuthor = function(author){
		$.ajax({
			"url": '/buscapagina?ft='+author.nomeautor+'&PS=6&sl=65c15678-2bbe-72e0-3aa6-0aa635db2f86&cc=50&sm=0&PageNumber=1',
			"async" : false,
			"crossDomain": true,
			"type": "GET"
		}).success(function(products){
			var home = $('.autores-box');
			var id = author.id;
			var linkautor = author.link;
			var fotoautor = author.fotoautor;
			var nomeautor = author.nomeautor;
			var descricaoautor = author.descricaoautor;
			$('<div class="autor-box"><div class="first-col"><a href="/autor#'+link+'"><img src="http://thomsonreuters.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId='+name+'-'+id+'&fileName='+fotoautor+'" /></a></div><div class="second-col"><h3><a href="/autor#'+link+'">'+nomeautor+'</a></h3><article><a href="/autor#'+link+'">'+descricaoautor+'</a></article></div><div class="third-col autor-obras">'+products+'</div></div>').appendTo(home);
		})
	}

	$.ajax({
		"headers": {
			"Accept": "application/vnd.vtex.masterdata.v10.profileSchema+json",
		},
		"url": apiUrl,
		"async" : false,
		"crossDomain": true,
		"type": "GET"
	}).success(function(data) {
		var elements = data;
		var html = '';
		$(elements).each(function(index, val){
			renderAuthor(val);
		});
	}).fail(function(data) {
		window.alert('Ocorreu algum erro, por favor: Tente mais tarde.');
	});
	// Render Page END //

	// Slick Generator Begin //
	$('.autor-obras .prateleira ul li.helperComplement').remove();
	var myItens = $('.autor-obras .prateleira ul');
	var prevBtn = $('<button class="slick-prev slick-arrow slick-disabled" aria-label="Previous" type="button" aria-disabled="true" style="display: block;">Previous</button>').insertBefore(myItens);
	var nextBtn = $('<button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;" aria-disabled="false">Next</button>').insertAfter(myItens);

	$('.slick-prev').on('click', function(event){
		var myShelf = $(this).next();
		var myFirst = $(myShelf).find('li:first-child');
		var myLast = $(myShelf).find('li:last-child');
		myLast.insertBefore(myFirst);
	});

	$('.slick-next').on('click', function(event){
		var myShelf = $(this).prev();
		var myFirst = $(myShelf).find('li:first-child');
		var myLast = $(myShelf).find('li:last-child');
		myFirst.insertBefore(myLast);
	});
	// Slick Generator END //

	//
	var myBox = $('.autor-box').each(function(){
		var name = $(this).find('.second-col h3').text();
		var variable2 = name.substring(0, 1);
		$(this).addClass(variable2);
	});

	$('.letter-list__item span').click(function(){
		var myAttr = $(this).attr('class');
		$('.letter-list__item span').removeClass('active');
		$(this).addClass('active');
		$('.autor-box').hide();
		$('.autor-box.'+myAttr+'').show();
	});

	$('.letter-list__item span.none').click(function(){
		$('.autor-box').show();
	});

	var numResults = $('.autor-box').length - 1;
	$('.num-resultados').text(numResults+' resultados');

});
