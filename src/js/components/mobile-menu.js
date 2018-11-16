
class MobileMenu {
  constructor() {
    this.menuIcon = $(".header__menu-icon");
	this.menuMobileContent = $(".menu__mobile");
	this.bodyChange = $('body');
    this.events();
  }

  events(){
	this.menuIcon.click(this.toggleTheMenu.bind(this));
  }


  toggleTheMenu() {
    this.menuMobileContent.toggleClass("menu__mobile--is-visible");
	this.menuIcon.toggleClass("header__menu-icon--close-x");
	this.bodyChange.toogleClass('menu-active');
  }
}

let mobileMenu = new MobileMenu;
