import React from 'react';
import style from './Myposts.module.css'
import Post from "./Post/Post";

function Myposts() {
    return (
        <div>Myposts
            <Post name='Ilya' age='30' like='16 like' />
            <Post name='Petr' age='15' like='13 like'/>
            <Post name='Ivan' age='23' like='14 like'/>
            <Post name='Eshe odin Ivan' age='14' like='24 like'/>
        </div>
    )
}

export default Myposts