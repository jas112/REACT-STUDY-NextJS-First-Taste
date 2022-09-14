import Layout from "../components/layout";
import axios from 'axios';
import Link from 'next/link';

const Index = ({ posts }) => {

    console.log(`Rendering => Index...${JSON.stringify(posts)}`);

    let postElements = posts.map(post => (
        <div key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                {post.title}
            </Link>
        </div>
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
// import axios from 'axios';
// import Link from 'next/link';

// class Index extends Component {
//     constructor(props){
//         super(props);
//     }

//     static async getInitialProps(){
//         console.log(`Retrieving data....@Index getInitialProps`);
//         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         const {data} = res;
//         console.log(data);
//         return {posts: data};
//     }


//     render(){

//         const {posts} = this.props;

//         let postElements = posts.map(post => (
//             <div key={post.id}>{`>>> ${post.title}`}</div>
//         ));

//         return(
//             <div>
//                 <h1>Index Page...</h1>
//                 {postElements}
//             </div> 
//         );
//     };
// }

// export default Index;



