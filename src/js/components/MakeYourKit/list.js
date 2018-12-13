import React from 'react'

export default props => {
	const renderItem = () => {
		const list = props.list || [];
		return list.map(item => (
			<li key={item.productId}>
				<div className="product product--list">
					<div className="product__media">
						<img className="product__image" src={item.items[0].images[0].imageUrl} width="30"/>
					</div>
					<div className="product__info">
						<h3 className="product__name">{item.productName}</h3>
						<span className="product__authors">{item.Autores}</span>
					</div>
					<div className="product__action">
						<button className="button" data-product={JSON.stringify(item)} onClick={props.button}>+</button>
					</div>
				</div>
			</li>
		))
	}

	return (
		<ul className="kit__result-list">
			{renderItem()}
		</ul>
	)
}
