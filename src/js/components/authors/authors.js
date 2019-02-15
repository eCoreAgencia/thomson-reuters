import React, { Component } from 'react'
import Author from './author';

export default class Authors extends Component {
	state = {
		letters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"],
		authors: [],
		filtered: [],
		currentPage: 1,
		itemsPerPage: 5
	}

	async componentWillMount(){
		const authors = await this.getAuthors();
		this.setState({authors: [...authors], filtered: [...authors]})

		//this.filterAuthors('all');
	}
	filterAuthors = (e) =>{
		const letter = e.target.innerHTML;
		if(filter === 'all') {
			console.log(this.state.authors)
			this.setState({filtered: [...this.state.authors], currentPage: 1})
		}else {
			console.log(letter, 'letter')
			const filterMatches = (words, letter) => {
				return words.filter(function (word) {
					console.log(word.nomeautor.charAt(0), letter)
					return word.nomeautor.charAt(0) === letter;
				});
			}
			const filter = filterMatches(this.state.authors, letter)
			this.setState({filtered: [...filter], currentPage: 1})

		}


	}

	handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
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
		const { authors, currentPage, itemsPerPage, letters, filtered } = this.state;
		const indexOfLastAuthor = currentPage * itemsPerPage;
		const indexOfFirstAuthor = indexOfLastAuthor - itemsPerPage;
		const currentAuthors = filtered.slice(indexOfFirstAuthor, indexOfLastAuthor);
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(filtered.length / itemsPerPage); i++) {
			pageNumbers.push(i);
		  }
		const renderPageNumbers = pageNumbers.map(number => {
			<li key={number} id={number} onClick={this.handleClick} >{number}</li>

		});

		return (
			<div className="authors">
				<h2 className="authors__title">Autores</h2>
				<div className="authors__header">
					<span className="authors__total"> 16 resultados</span>
					<div className="authors__filter">
						<span className="authors__filter-all">Todas</span>
						{letters.map((letter, index) => ( <span key={index} onClick={this.filterAuthors} className="authors__filter-letter">{letter}</span> ))}
					</div>

				</div>
				<div className="authors__content">
					<Author authors={currentAuthors} />
				</div>
				<div className="authors__footer">
					<ul id="page-numbers">
						{ pageNumbers.map(number => ( <li key={number} id={number} onClick={this.handleClick} >{number}</li>))}
					</ul>
				</div>
			</div>
		)
	}
}
