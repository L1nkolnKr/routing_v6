import React from 'react'
import { useNavigate } from 'react-router';
import { useAuth } from '../hook/useAuth'


const Createpost = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Create post</h1>
            <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    )
}

export default Createpost
