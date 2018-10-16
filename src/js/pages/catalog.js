class Catalog {
    constructor() {
        if($('body').hasClass('catalog')) {
            this.resultNumber();
            this.grad();
            this.orderBy();
        }
    }

    resultNumber() {
        let number = $('.searchResultsTime:last .resultado-busca-numero .value').text();
        if(number == 1) {
            $('.navCatalog__numberResult p').text(number+' RESULTADO');
        } else if(number == 0) {
            $('.navCatalog__numberResult p').text('NENHUM RESULTADO ENCONTRADO');
        } else {
            $('.navCatalog__numberResult p').text(number+' RESULTADOS');
        }
    }

    grad() {
        $('.icon-list').on('click', function(e) {
            e.preventDefault();
            $('.shelf').addClass('list');
            $(this).addClass('active');
            $('.icon-grid').removeClass('active');
        });
        $('.icon-grid').on('click', function(e) {
            e.preventDefault();
            $('.shelf').removeClass('list');
            $(this).addClass('active');
            $('.icon-list').removeClass('active');
        });
    }

    orderBy() {
        var url = window.location.href;

        $('.orderBy__ecore ul li').each(function() {
            var termo = $(this).attr('data-value');
            if(url.indexOf(termo) > -1) {
                var text = $(this).text();
                $('.orderBy__ecore__select--title p').text(text);
            }
        })

        $('.orderBy__ecore__select--title').on('click', function() {
            $(this).parent().find('.orderBy__ecore__select--option').fadeToggle("linear" );
            $('.orderBy__ecore').toggleClass('active');
        });

        $('.orderBy__ecore__select--option ul li').on('click', function() {
            let orderBy = $(this).attr('data-value');
            let text    = $(this).text();

            $('.orderBy__ecore__select--title p').text(text);
            window.location = window.location.pathname +'?O='+ orderBy;
        })
    }
}

window.menu = new Catalog();