const SERVER_URL = 'http://localhost:8080/api/';

export default class CommentService {

    async fetchPosts() {
        const data = await fetch(SERVER_URL + 'posts');
        const posts = await data.json();
        return  posts;
    }

    async createComment(comment,postId) {
        await fetch(SERVER_URL +'comments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        });
}
}
