import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';

const Blogpage = () => {
    const[posts, setPosts] = useState();
    const[searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');

    const startsForm = latest ? 80 : 1;

    const handleSubmit =(e) =>{
        e.preventDefault();
        const form = e.target;

        const query = form.search.value;
        const isLatest = form.latest.checked;

        const params = {};
        if(query.length) params.post = query;
        if(isLatest) params.latest = true;
        setSearchParams({post: query});

    }

    useEffect(() => {
        fetch('....')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    return (
    <div>
        <h1>Blogpage</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search"/>
            <label >
                <input type="checkbox" name="latest"/>New only
            </label>
            <input type="submit" name="Search"/>

        </form>
        <Link to="/posts/new">Add new post</Link>
        {
            posts.filter(post => post.title.includes(postQuery) && post.id >= startsForm
            ).map(post => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))
        }
    </div>
    )
}

export default Blogpage