import React from 'react'

export default props => {
	const renderItem = () => {
		const list = props.list || [];
		return list.map((item, index) => (
			<li key={index}>
				<div className="product product--shelf">
					<div className="product__media">
						<img className="product__image" src={item.items[0].images[0].imageUrl} width="100" />
					</div>
					<button className="button button--remove" data-key={index} onClick={props.remove}>x</button>
				</div>
			</li>
		))
	}

	return (
		<ul className="kit__products">
			{renderItem()}
		</ul>
	)
}
