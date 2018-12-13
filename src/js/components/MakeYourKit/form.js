import React from 'react'

export default props => (
	<form className="kit__search-form" action="" onSubmit={props.submit}>
		<div className="kit__form-control">
			<input className="kit__input" type="text" value={props.value} 	onChange={props.change} placeholder="Pesquise pelo nome do livro, autor, área, coleção..."/>
			<button className="button"><span className="icon-search simple-magnifier"></span></button>
		</div>
	</form>
)
