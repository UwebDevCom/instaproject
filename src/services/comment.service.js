const SERVER_URL = '/api/';

class CommentService{
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
};


async createComment(comment,postId) {
    await fetch(SERVER_URL +'comments/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
        }).then(
            response=>response.json()
            .then(
                (data)=>{
                    fetch(SERVER_URL +'posts/'+postId).then(res=>res.json().then(dataPost=>{
                        dataPost.comments.push(data._id)
                        this.updatePost(dataPost, postId)
                    }))
                })  
            );
        }
}



export default CommentService;