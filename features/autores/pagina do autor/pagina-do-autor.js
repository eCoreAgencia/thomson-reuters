$(document).ready(function(){
	// Render Page Begin //
	var myPlayer = window.location.href;
	var myPlayerID = myPlayer.split(/\#/)[1];

	var store = 'api';
	var name = 'AT';
	var fields = 'fotoautor,id,nomeautor,descricaoautor,link';
	var urlProtocol = window.location.protocol;
	var apiUrl = urlProtocol + '/' + store + '/dataentities/' + name + '/search/?_fields='+ fields + '&_where=link='+myPlayerID+'';

	var renderAuthor = function(author){
		$.ajax({
			"url": '/buscapagina?ft='+author.nomeautor+'&PS=24&sl=00b946e6-2122-1ae3-12e9-c677957f37e7&cc=50&sm=0&PageNumber=1',
			"async" : false,
			"crossDomain": true,
			"type": "GET"
		}).success(function(products){
			var home = $('main');
			var id = author.id;
			var fotoautor = author.fotoautor;
			var nomeautor = author.nomeautor;
			var descricaoautor = author.descricaoautor;
			$('.tlt-autores').text(nomeautor);
			$('<div class="container autor-box"><div class="first-col"><img src="http://thomsonreuters.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId='+name+'-'+id+'&fileName='+fotoautor+'" /></div><div class="second-col"><h3>'+nomeautor+'</h3><article>'+descricaoautor+'</article></div></div><div class="container section__shelf shelf autor-obras">'+products+'</div>').appendTo(home);
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

	$('.prateleira li.helperComplement').remove();
});
