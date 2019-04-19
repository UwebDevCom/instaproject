const serverUrl = 'http://localhost:8080/api/'

export default class UsersService {
    async fetchUsers() {
        const data = await fetch(serverUrl + 'users')
        const users = await data.json();
        return users 
    }
}