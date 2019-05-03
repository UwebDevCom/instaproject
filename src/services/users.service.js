const SERVER_URL = 'http://localhost:8080/api/'

export default class UsersService {
    async fetchUsers() {
        const data = await fetch(SERVER_URL + 'users/');
        const users = await data.json();
        return users;
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