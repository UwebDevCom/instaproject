const SERVER_URL = 'http://localhost:8080/api/'

export default class UsersService {
    async fetchUsers() {
        const data = await fetch(SERVER_URL + 'users/');
        const users = await data.json();
        return users;
    }
    async savePost(userId,saved) {
<<<<<<< HEAD
=======
        console.log(saved);
>>>>>>> d97c4ca21a1c00374af1c81f1abe076818d621c9
        await fetch(SERVER_URL +'users/'+ userId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(saved)
        });
    }

    async fetchUser(id) {
        const data = await fetch(SERVER_URL + 'users/' + id);
        const user = await data.json();
        return user;
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