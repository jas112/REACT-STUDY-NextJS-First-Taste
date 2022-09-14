import Layout from "../components/layout";
import axios from 'axios';

const Index = ({ posts }) => {

    console.log(`Rendering => Index...${JSON.stringify(posts)}`);

    let postElements = posts.map(post => (
        <div key={post.id}>{`>>> ${post.title}`}</div>
    ));

    return( 
        <div>
            <h1>Index Page...</h1>
            {postElements}
        </div>         
    ); 
}

Index.getInitialProps = async () => {
    // https://jsonplaceholder.typicode.com/posts
    console.log(`Retrieving data....@Index getInitialProps Functional`);
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const {data} = res;
    console.log(data);
    return {posts: data};
}

export default Index;

// import React, {Component} from 'react';

// class Index extends Component {
//     constructor(props){
//         super(props);
//     }

//     static async getInitialProps(){
//         console.log(`Retrieving data....@Index getInitialProps`);
//     }


//     render(){
//         return(
//             <div>
//                 <h1>Index Page...</h1>
//             </div> 
//         );
//     };
// }

// export default Index;



