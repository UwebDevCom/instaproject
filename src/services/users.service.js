
const SERVER_URL = 'api/'

export default class UsersService {
    
    async fetchSuggestionsUsers() {}

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
    async fetchUser(userEmail,password) {

            const data = await fetch(SERVER_URL + 'users/');
            const users = await data.json();

            let id = users.filter((user)=>user.email === userEmail && user.password === password );
            
            if (id.length > 0 ) {
                const userData = await fetch(SERVER_URL + 'users/' + id[0]._id);
                const user = await userData.json();
                return user;
            }else {return undefined;}
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

    async registerUser(userData) {
        console.log('user service data:', userData);
        const user = await fetch(SERVER_URL + 'users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(user => console.log('user from server: ',user))
        .catch(error => console.log('this is error; ',error))
        return user;
    }
}