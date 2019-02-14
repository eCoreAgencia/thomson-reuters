import React, { Component } from 'react'

export default class Authors extends Component {
	state = {
		letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"],
		authors: [],
	}

	async componentWillMount(){
		const authors = await this.getAuthors();
		this.setState({authors: [...authors]})

		console.log(authors);
	}

	getAuthors() {
		const endpoint = 'http://api.vtex.com/thomsonreuters/dataentities/AT/search?_fields=fotoautor,id,nomeautor,descricaoautor,link'

		const headers = {
			"method": 'Get',
			"headers": {
				"Content-Type": 'application/json',
				"Accept": 'application/vnd.vtex.ds.v10+json',
				"REST-Range": "resources=0-100"
			}

		}

		//getAuthors.cache = getAuthors.cache || {}



		return new Promise((resolve, reject) => {
			return fetch(endpoint, headers)
				.then(data => {
					return resolve(data.json())
				})
				.catch(err => reject(err))
		})
	}
	render() {
		return (
			<div className="authors">
				<h2 className="authors__title">Autores</h2>
				<div className="authors__header">
					<span className="authors__total"> 16 resultados</span>
					<div className="authors__filter">
						<span className="authors__filter-all">Todas</span>
						{this.state.letters.map(letter => ( <span className="authors__filter-letter">{letter}</span> ))}
					</div>
				</div>
				<div className="authors__content">
					<ul className="authors__list">
						{this.state.authors.map(author => (

							<li className="authors__item">
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
				</div>
			</div>
		)
	}
}
