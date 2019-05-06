$(document).ready(function(){
	$('li.menu__mobile-items .titleMenu').on('click', function (e) {
		let _this = $(this);
		let body = $('body');
		_this.toggleClass('active');
		_this.next().toggleClass('active');
	})

	const menuIcon = $(".header__menu-icon");
	const menuMobileContent = $(".menu__mobile");
	const bodyChange = $('body');

	const toggleTheMenu = () => {
		menuMobileContent.toggleClass("menu__mobile--is-visible");
		menuIcon.toggleClass("header__menu-icon--close-x");
		bodyChange.toogleClass('menu-active');
	}
	menuIcon.on('click', function(){
		toggleTheMenu();
	});
})
