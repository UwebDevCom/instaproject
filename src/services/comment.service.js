const SERVER_URL = 'http://localhost:8080/api/';

class CommentService{
constructor(){}

async fetchPosts() {
    const data = await fetch(SERVER_URL + 'posts');
    const posts = await data.json();
    return  posts;
}
async updatePost(post ,postId) {
    await fetch(SERVER_URL +'posts/'+ postId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    });
}
}



export default CommentService;