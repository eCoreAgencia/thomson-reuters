import '../scss/main.scss';
import './modules/vtexRequest';
import './components/MakeYourKit/app';
import './components/authors/index';

import './components/selectFooter';
import './components/minicart';
import './components/searchForm';
import './components/shelf';
import './components/filter';
import './components/mobile-menu';
import './components/product';
import './components/sticky-header';
import './components/sumario';
import './components/newsletter';
import './components/sumarioShelf';
import './components/menuMobile';
import './components/login';

import './components/proview';
import './components/events';


import './pages/home';
import './pages/global';
import './pages/not-found';
import './pages/catalog';
import './pages/empty-search';
import './pages/institucional';
import './pages/product';
import './pages/account';





$(document).ready(function () {
	if ($('li.helperComplement')[0]) {
		$('li.helperComplement').remove();
	}
})
