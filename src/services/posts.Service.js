const SERVER_URL = 'http://localhost:8080/api/';

export default class PostsService{

    async fetchPosts() {
        const data = await fetch(SERVER_URL + 'posts');
        const posts = await data.json();
        return  posts;
    };

    async updatePost(post ,postId) {
        await fetch(SERVER_URL +'posts/'+ postId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
    };

    async deletePostById(postId) {
        await fetch (SERVER_URL + 'posts/' + postId, {
            method: 'DELETE',
        });
    };

    async createPost(postData) {
        await fetch(SERVER_URL + 'posts/',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'               
            },
            body: JSON.stringify(postData)
        });
    }
};
