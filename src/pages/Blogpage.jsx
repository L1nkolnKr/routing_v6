import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Blogpage = () => {
    const[posts, setPosts] = useState();

    useEffect(() => {
        fetch('....')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    return (
    <div>
        <h1>Blogpage</h1>
        {
            posts.map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))
        }
    </div>
    )
}

export default Blogpage