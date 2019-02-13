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
    
    sendDataForm(data) {
        let self = this;
        const email = data.email;
        const name = data.name;
        const cupom = data.cupom;
        
        const user = self.getUserProview(email);

        if(user) {
            self.sendCupomToProview(user.id, cupom);

        }else{
            const newUser = self.createUserProview(email, name);
            self.sendCupomToProview(newUser.id, cupom);
        }

    }

    createUserProview(email, name) {
        const endpoint = `/user/create`;
        const settings = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            body: {
                email: email,
                name: name
            }
        }

        
        return new Promise((resolve, reject) => {
            return fetch(endpoint, settings)
                    .then(data => {
                        return resolve(data.json())
                    })
                    .catch(err => reject(err))
        })
    }

    getUserProview(email) {
        const endpoint = `/user/${email}`;
        const settings = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        
        return new Promise((resolve, reject) => {
            return fetch(endpoint, settings)
                    .then(data => {
                        return resolve(data.json())
                    })
                    .catch(err => reject(err))
        })
    }

    sendCupomToProview(userId, cupom) {
        const endpoint = `/user/code`;
        const settings = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            },
            method: 'POST',
            body: {
                userId: userId,
                cupom: cupom
            }
        }

        
        return new Promise((resolve, reject) => {
            return fetch(endpoint, settings)
                    .then(data => {
                        return resolve(data.json())
                    })
                    .catch(err => reject(err))
        })
    }



}


$(document).ready(() => {
	if ($('body').hasClass('proview-form')) {

		window.Proview = new Proview();

	}
});
