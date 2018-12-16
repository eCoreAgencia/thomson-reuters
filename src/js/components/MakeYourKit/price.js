import React from 'react'

export default props => {
	const renderPrice = () => {
		const list = props.list || [];

		const total = list.reduce((prev, next) => prev + next.items[0].sellers[0].commertialOffer.Price, 0)
		const desc = total * (list.length * 0.2);
		const ecom = total - desc;

		return (
			<div className="price">
				<span className="kit__price-economy">economize R$ {ecom.formatMoney()} </span>
				<span className="kit__price-old">de R$ {total.formatMoney()} </span>
				<span className="kit__price-best">de R$ {desc.formatMoney()}</span>
			</div>
		)
	}

	return (
		<div className="kit__price">
			{renderPrice()}
			<button className="button button--primary" onClick={props.action}>Montar Kit</button>
		</div>
	)
}
