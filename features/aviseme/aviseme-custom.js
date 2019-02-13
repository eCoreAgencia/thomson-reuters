function newsLetterFooter(){

	var productName = $('#productName').text();

    var jsonSaveDadosUser = {
        "nomeproduto": $("#nomeproduto").val(productName),
        "dataaviseme": $("#dataaviseme").val(),
        "emailcliente": $("#emailcliente").val(),
        "nomecliente": $("#nomecliente").val()
    };

    var urlSaveDadosUser = 'http://api.vtexcrm.com.br/thomsonreuters/dataentities/AV/documents/';

    $.ajax({
        headers: {
            'Accept': 'application/vnd.vtex.ds.v10+json',
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(jsonSaveDadosUser),
        type: 'PATCH',
        url: urlSaveDadosUser,
        success: function (data) {
          console.log(data);
          $("div#messageSuccess").removeClass("hide");
          $("#emailcliente").val("");
          $("#nomecliente").val("");
          $("#dataaviseme").val("");
          $("#nomeproduto").val("");
          window.alert('Em breve entraremos em contato para alertarmos sobre a chegada do produto. Obrigado.');
        },
        error: function (data) {
            console.log(data);
            window.alert('Ocorreu um erro ao enviar seu avise-me. Pode retornar? Obrigado.');
        }
    });
}
