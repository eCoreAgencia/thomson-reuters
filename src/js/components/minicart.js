class Minicart {
     constructor() {
       $(window).on('orderFormUpdated.vtex', (evt, orderForm) => {
         this.update(orderForm)
       })
       vtexjs.checkout.getOrderForm()
     }
     renderItem(item, i) {
		let { quantity } = item
       return `
         <li class="minicart-product" data-item-id="${item.id}">
           <div class="minicart-product__image"><img src="${item.imageUrl}"></div>
           <div class="minicart-product__info">
             <h4 class="minicart-product__name">${item.name}</h4>
             <strong class="minicart-product__price">R$ ${(item.price / 100).formatMoney()}</strong>
           </div>

             <button class="minicart-product__remove" type="button" onclick="Minicart.removeItem.apply(null, [${i}])" title="Remover ${item.name} do carrinho">X</button>
         </li>
       `
     }

     renderItems() {
       return this.orderForm.items.map(this.renderItem, this).join('')
     }

     render() {
       let qty = this.getQuantity()
       return `
         <div class="minicart ${qty > 0 ? 'is-not-empty' : ''}">
            <button class="minicart__handle" title="sacola">
                <span class="minicart__count">
                    <i class="minicart__icon simple-bag"></i>
                    <span class="minicart__count-value">${this.printQuantity(qty)}</span>
                </span>
            </button>
            <div class="minicart__overlay"></div>
            <div class="minicart__container">
            <div class="minicart__close">X</div>
                <div class="minicart__header">
                    <button class="minicart__handle" title="sacola">
                        <i class="minicart__icon simple-bag"></i>
                        <span class="minicart__title">Suas Compras</span>
                    </button>
                </div>
                <div class="minicart__content">
                    <ul class="minicart__products">
                        ${this.renderItems()}
                    </ul>
                </div>
                <div class="minicart__footer">


                    <div class="minicart__totals">
                        <span class="minicart__totals-text">Total</span>
                        <strong class="minicart__totals-value">${this.getTotal()}</strong>
                    </div>
                    <a class="minicart__checkout" href="/Site/Carrinho.aspx">
                    ir para o carrinho</a>
                </div>
            </div>

         </div>
       `
     }

     removeItem(index) {
       vtexjs.checkout.removeItems([{index}])
     }

     updateItem(obj) {
       let { index, qty, calc } = obj
       let quantity = qty + +calc
       if (quantity) {
         vtexjs.checkout.updateItems([{index, quantity}], null, false)
       }
     }

     getTotal() {
       const itemsTotal = this.orderForm.totalizers.find(item => item.id === 'Items')
       const total = itemsTotal ? itemsTotal.value / 100 : 0
       return `R$ ${total.formatMoney()}`
     }

     getQuantity() {
       const qty = this.orderForm.items.reduce((prev, next) => prev + next.quantity, 0)
       return qty
     }

     printQuantity(qty) {
       return `${qty}`
     }

     update(orderForm) {
       this.orderForm = orderForm
       this.mount()
     }

     mount() {
       $('.main-header__carrinho').html(this.render())
     }
}

$(document).ready(function(){
    window.Minicart = new Minicart();

    $('body').on('click', '.minicart__handle, .minicart__close', function(){
        $('.minicart').toggleClass('active');
    })
})
