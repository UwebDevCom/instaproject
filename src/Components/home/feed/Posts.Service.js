
// import React , {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';

// export function GetPosts(props){

//     const [posts, setPosts] = useState(['']);
//     const [isLiked, toggleLike] = useState(false);
    
    
//     useEffect(async ()=>{
//         const data = await fetch('http://localhost:8081/api/posts');
//         const postsFetch = await data.json();
//         setPosts(postsFetch);
//     },[]);


//     function formatNumber(num) {
//         return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
//       }
      
//     return(  
//         <React.Fragment>
//             {posts && posts[0].author ? posts.map((post)=>
//         <article id={post._id} className="post-wrap">
//             <header className="post-header">
//                <div className="header-flex">
//                <a className="user-image"><img src={post.author.userImg} alt={post.author._id}/></a>
//                 <div className="user-top-details"><Link to='/username'>{post.author.name}</Link><p>{post.author.location}</p></div>
//                </div>
//                 <a className="post-settings">...</a>
//             </header>
//             <div className="visual"><img src={post.image} alt="" /></div>
//            <div className="interaction">
//            <div className="features">
//               <div className="buttons">
//               <button><span onClick={()=>toggleLike(!isLiked)} className={isLiked? 'like-btn liked':'like-btn unliked'}></span></button> 
//               <button><span className="comment-btn"></span></button> 
//               <button><span className="share-btn"></span></button> 
//               </div>
//               <div className="save-it">
//               <button><span className="save-btn"></span></button> 
//               </div>
//            </div>
//            <div className="like-counter">
//                <p>{formatNumber(post.likes)} likes</p>
//            </div>
//            <div className="caption">
//                <p><span>{post.author.userName}</span> {post.caption} likes</p>
//            </div>
//             <div className="comments"></div>
//            </div>
//            <div className="add-a-comment">
//                 <form className="add-comment" method="POST">
//                 <textarea placeholder="Add a comment…"></textarea>
//                 <button type="submit">Post</button>
//                 </form>
//             </div>
//         </article>
//   ) 
//  : <button>refresh</button>}
//         </React.Fragment>
//     )
// }

