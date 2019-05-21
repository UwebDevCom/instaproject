
const SERVER_URL = 'http://localhost:8080/api/'

export default class UsersService {

    fetchLocalStorage(myUser, posts){
    if (!localStorage.getItem('myUserData')) {
        localStorage.setItem('myUserData', JSON.stringify(myUser));
        }
        console.log(myUser,JSON.parse(localStorage.getItem('myUserData')));
        myUser(JSON.parse(localStorage.getItem('myUserData')));
        posts(JSON.parse(localStorage.getItem('istheUser'))); 
    }    

    async fetchSuggestionsUsers() {
        const data = await fetch(SERVER_URL + 'users/');
        const users = await data.json();
            return users;
    }

    async userAuth(userEmail,userPassword) {
        const result = await fetch(SERVER_URL + 'auth/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })
        });
        const user = await result.json();
        return user;
    }

    async savePost(userId,saved) {
        await fetch(SERVER_URL +'users/'+ userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saved)
        });
    }

    async createUser(userData) {
        await fetch(SERVER_URL + 'users/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
    }
}