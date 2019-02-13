class Proview {
	constructor() {
		let self = this;
		$('.proview__form').on('submit', function (e) {
			e.preventDefault();
			$(this).addClass('is-loading');
			self.sendFormToProview();
		});
	}

	fieldError(field) {
		console.log(field);
	}

	sendFormToProview(data) {
		const name = data.name;
		const email = data.email;
		const cupom = data.cupom;
		const user = self.getUser(email)

		if (user) {
			self.sendUserAndCode(user.id, cupom);
		} else {
			const newUser = self.createUser(name, email);
			self.sendUserAndCode(newUser.id, cupom);
		}


	}

	getUser(email) {
		const endpoint = `/api/getuser/${email}`;
		return new Promise((resolve, reject) => {
			let res = user.cache[userID]
			if (res) return resolve(res)
			else {
				return fetch(endpoint)
					.then(data => {
						user.cache[userID] = data.json()
						return resolve(user.cache[userID])
					})
					.catch(err => reject(err))
			}
		})
	}

	createUser(email) {
		const endpoint = `/api/createuser/`;
		const settings = {
			method: "POST",
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: {
				name: name,
				email: email
			}
		}
		return new Promise((resolve, reject) => {
			let res = user.cache[userID]
			if (res) return resolve(res)
			else {
				return fetch(endpoint, settings)
					.then(data => {
						user.cache[userID] = data.json()
						return resolve(user.cache[userID])
					})
					.catch(err => reject(err))
			}
		})
	}

	sendUserAndCode(userID, cupom) {
		const endpoint = `/api/createuser/`;
		const settings = {
			method: "POST",
			headers: {
				'Accept': 'application/json, text/plain, */*',
				'Content-Type': 'application/json'
			},
			body: {
				userID: userID,
				cupom: cupom
			}
		}
		return new Promise((resolve, reject) => {
			let res = user.cache[userID]
			if (res) return resolve(res)
			else {
				return fetch(endpoint, settings)
					.then(data => {
						user.cache[userID] = data.json()
						return resolve(user.cache[userID])
					})
					.catch(err => reject(err))
			}
		})
	}
}


$(document).ready(() => {
	if ($('body').hasClass('proview-form')) {

		window.Proview = new Proview();

	}
});
