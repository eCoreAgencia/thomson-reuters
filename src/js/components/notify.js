import { getProductsById } from '../modules/vtexRequest';



$(document).ready(function () {
	function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	};

	$('.notifyme .sku-notifyme-button-ok').on('click', function () {
		var email = $('.sku-notifyme-client-email').val();
		var name = $('.sku-notifyme-client-name').val();
		var productId = $('#___rc-p-id').val();
		var apiUrl = '//api.vtexcrm.com.br/thomsonreuters/dataentities/AM/documents';

		var who = {
			"userEmail": email,
			"userName": name,
			"productIdUnavailable": productId
		};


		$.ajax({
			"headers": {
				"Accept": "application/vnd.vtex.ds.v10+json",
				"Content-Type": "application/json"
			},
			"url": apiUrl,
			"async": false,
			"crossDomain": true,
			"type": "POST",
			"data": JSON.stringify(who)
		}).success(function (data) {
			response = data;


		}).fail(function (data) {
			response = data;

		});



	})

	const checkNotifyUpdate = async (id, productId) => {
		getProductsById(productId).then(product => {
			console.log(product[0]);

			var fields = {
				productIdAvailable: product[0].productId,
				productNameAvailable: product[0].productName,
				productImageAvailable: product[0].items[0].images[0].imageUrl,
				productUrlAvailable: `https://www.livrariart.com.br/${product[0].productId}/p`,
				send: true
			}
			putInMasterData(id, fields)
		});



	}

	if($('body').hasClass('notify-me')){
		var newProductId = getUrlParameter('newProduct');
		var oldProductId = getUrlParameter('oldProduct');
		var response;
		var apiUrl = `//api.vtexcrm.com.br/thomsonreuters/dataentities/AM/search?_where=(productIdUnavailable=${oldProductId} AND send is null)&_fields=id`;

		$.ajax({
			"headers": {
				"Accept": "application/vnd.vtex.masterdata.v10.profileSchema+json"
			},
			"url": apiUrl,
			"async": false,
			"crossDomain": true,
			"type": "GET"
		}).success(function (data) {
			const clients = data;


			clients.map(res => {
				checkNotifyUpdate(res.id, newProductId);
			})

		}).fail(function (data) {
			response = data;
			console.log(data);
		});
	}







	function putInMasterData(id, fields) {
		var apiUrl = '//api.vtexcrm.com.br/thomsonreuters/dataentities/AM/documents/' + id;
		var response;



		$.ajax({
			"headers": {
				"Accept": "application/vnd.vtex.masterdata.v10+json",
				"Content-Type": "application/json"
			},
			"url": apiUrl,
			"async": false,
			"crossDomain": true,
			"type": "PATCH",
			"data": JSON.stringify(fields)
		}).success(function (data) {
			response = data;
		}).fail(function (data) {
			response = data;
		});

		return response;
	}

	/* const cron = async () => {

		var clients = await getFromMasterData('(productIdUnavailable=162 AND send is null)', 'id')

		if (typeof clients !== 'undefined') {
			clients.forEach(client => {
				var fields = {
					productIdAvailable: 163,
					productNameAvailable: 'teste',
					productUrlAvailable: 'www.teste.com.br'
				}
				putInMasterData('0b93b65f-6d10-11e9-828f-0a5eeda8a3a4', fields)
			})
		}
	}

	cron(); */






})
