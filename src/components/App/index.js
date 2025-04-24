import React, {useState} from 'react';
import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import * as styles from './App.scss'
import {Title} from './styles';

function App() { 
    const [posts , setPosts] = useState([
        {id: Math.random() , title: 'Title #01' , subtitle: "Subtitle #01", likes: 20, read: false, removed: false },
        {id: Math.random() , title: 'Title #02' , subtitle: "Subtitle #02", likes: 30, read: false, removed: false },
        {id: Math.random() , title: 'Title #03' , subtitle: "Subtitle #03", likes: 40, read: false, removed: false },
        {id: Math.random() , title: 'Title #04' , subtitle: "Subtitle #04", likes: 40, read: false, removed: false }
    ]);

    console.log({posts});

    function handleRefresh() {
        setPosts((prevState) => [
            ... prevState,
            {
                id: Math.random(),
                title: `Title #0${prevState.length + 1}`,
                subtitle: `Subtitle #0${prevState.length + 1}`,
                likes: 40
            },
        ]);
    }

    function handleRemovePost (postId) {
        setPosts( (prevState) => prevState.map(
            post => (
                post.id == postId 
                    ? { ...post, removed: true }
                    : post
            )
        ));
    }

    return (
        <ThemeProvider>
            <Header>
                <Title as="h2">
                    Posts da Semana 
                    <button onClick={handleRefresh} >
                        Atualizar
                    </button>
                </Title>
            </Header>

            <hr />

            {posts.map(post => (
                <Post 
                    key={post.id}
                    onRemove={handleRemovePost}
                    post={
                        post
/*                      id: post.id,
                        title: post.title,
                        subtitle: post.subtitle,
                        likes= {post.likes} */
                    }
                />
            ))}
        </ThemeProvider>
    ); 
}

export default App;