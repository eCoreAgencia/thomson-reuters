import '../scss/main.scss'
import './modules/vtexRequest'

import './components/minicart';
// import './components/loader';
// import './components/menu';
// import './components/makeMenu';
import './components/searchForm';
import './components/shelf';
import './components/filter';
import './components/mobile-menu';
//import './components/buyBuyCategory';
import './components/product';
import './components/sticky-header';
import './components/sumario';


import './components/buy-by-category/main'


import './pages/home';
import './pages/not-found';
import './pages/catalog';
import './pages/empty-search';
import './pages/institucional';


$(document).ready(function(){
    if($('li.helperComplement')[0]){
        $('li.helperComplement').remove();
      }
})

