const SERVER_URL = 'http://localhost:8081/api/';

class PostsService{
constructor(){}

async fetchPosts() {
    const data = await fetch(SERVER_URL + 'posts');
    const posts = await data.json();
    return  posts;
}
}



export default PostsService;