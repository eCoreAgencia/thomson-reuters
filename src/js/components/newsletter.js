class Newsletter {
    constructor() {
        this.sendNews();
    }

    sendNews() {
        $('.main-footer .search-button__footer').on('click', function(e) {
            e.preventDefault();

            let inputVal = $('.main-footer .search-bar__input').val();

            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

            if(pattern.test(inputVal)) {

                var data =  {'email' : inputVal}
    
                $.ajax({
                    "async": true,
                    "url": "//api.vtexcrm.com.br/thomsonreuters/dataentities/NL/documents/",
                    "type": "PATCH",
                    "contentType": "application/json",
                    "data": JSON.stringify(data),
                    success : function () {                    
                        $('.search-bar.search-bar--narrow').html('<p style="color: #000;font-size: 11px;width: 100%;text-align: center;">Email cadastrado com sucesso !!!</p>');
                    },
                    error : function() {
                    }
                });
            } else {
                alert('Ops, aconteceu algum erro, depois mais tarde !!');
            }
        });
    }
}

window.filter = new Newsletter();