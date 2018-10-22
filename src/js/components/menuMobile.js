class MenuMob {
	constructor(){
		this.menuMobile();
	}

	menuMobile() {
		$('li.menu__mobile-items .titleMenu').on('click', function(e) {
			let _this = $(this);
			
			_this.toggleClass('active');
			_this.next().toggleClass('active');
		})
	}
}

window.menu = new MenuMob();

