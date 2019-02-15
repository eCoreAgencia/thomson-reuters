import React, { Component } from 'react';

export default class Author extends Component {
	constructor(props){
		super(props)


	}



	render() {
		const { authors } = this.props
		if(authors.length > 0) {
			return (
				<ul className="authors__list">
					{authors.map((author, index) => (

						<li key={index} className="authors__item">
							<div className="author">
								<div className="author__media">
									<img className="author__image" src={`http://thomsonreuters.vtexcrm.com.br/DynamicForm/GetFile?dataEntityInstanceId=AT-${author.id}&fileName=${author.fotoautor}`} width="160" />
								</div>
								<div className="author__info">
									<h3 className="author__name">{author.nomeautor}</h3>
									<div className="author__description">
										{author.descricaoautor}
									</div>
									<a className="author__link" href=""> Veja Mais</a>
								</div>
								<div className="author__books">
									<h3 className="author__books-tilte">Obras do Autor</h3>
								</div>
							</div>
						</li>
					))}

				</ul>
			)
		}else {
			return (
				<span> Sem Resultados </span>
			)
		}

	}
}
