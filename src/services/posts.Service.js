const SERVER_URL = '/api/';

export default class PostsService{

    async loggedUserSavedPosts(userId) {
        const posts = await fetch(SERVER_URL + 'posts/' + userId + '/loggedUserSavedPosts');
        return await posts.json();
    }

    async fetchLoggedUserPosts(userId) {
        const posts = await fetch(SERVER_URL + 'posts/' + userId + '/loggedUserPosts');
        return await posts.json();
    }

    async fetchPosts(userId) {
        const data = await fetch(SERVER_URL + 'posts/' + userId + '/following');
        const posts = await data.json();
        return  posts;
    };

    async fetchSinglePost(userId) {
        const data = await fetch(SERVER_URL + 'posts/'+userId);
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

    async updatePostLikes(postId,userId) {
        
        const data = await fetch(SERVER_URL + 'posts/'+ postId);
        let post = await data.json();
        if (post.likes.includes(userId)) {
            const postLikesArr = post.likes.filter(userLiked => userLiked!==userId);
            post.likes = postLikesArr;
        }else{
            post.likes.push(userId);
        }
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
