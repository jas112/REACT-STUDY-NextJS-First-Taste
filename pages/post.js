
import axios from 'axios';

const Post = ({ comments, postId }) => {

    let postCommentElements = comments.map(comment => (
        <div key={`${comment.postId}-${comment.id}`}>

            <div>
                <span style={{
                        fontWeight: 'bold', 
                        fontSize: '1.4rem'}}>{comment.email}:  </span>
                <span 
                    style={{
                        fontWeight: 'bold',
                        color: 'red', 
                        fontSize: '1.2rem'}}>
                            {comment.name}
                </span> 
            </div>
            <div>{comment.body}</div>
                
        </div>
    ));

    return (
        <div>
            <h2>Post #{postId} Comments</h2>
            {postCommentElements}
        </div>
        
    );
}

Post.getInitialProps = async ({query}) => {
    // https://jsonplaceholder.typicode.com/posts/4/comments
    console.log(`Retrieving data....@Index getInitialProps Functional...id => ${JSON.stringify(query)}`);
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}/comments`);
    const {data} = res;
    console.log(data);
    return {comments: data, postId: query.id};
}

export default Post;