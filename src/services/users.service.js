
const SERVER_URL = 'http://localhost:8080/api/'

export default class UsersService {
    
    async fetchSuggestionsUsers() {
        const data = await fetch(SERVER_URL + 'users/');
        const users = await data.json();
            return users;
    }

    async userAuth(userEmail,password) {

        const data = await fetch(SERVER_URL + 'users/');
        const users = await data.json();

        let id = users.filter((user)=>user.email === userEmail && user.password === password );
        if (id.length > 0 ) {
            const userData = await fetch(SERVER_URL + 'users/' + id[0]._id);
            const user = await userData.json();
            return user;
        }else {return undefined;}
    }

    async savePost(userId,saved) {
        console.log(saved);
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