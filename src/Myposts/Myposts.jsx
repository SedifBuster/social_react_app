import React from 'react';
import style from './Myposts.module.css'
import Post from "./Post/Post";

function Myposts() {
    let postData = [
        {id: 1, message: 'Ilya', age: '30', likecount: 16},
        {id: 2, message: 'Petr', age: '15', likecount: 13},
        {id: 3, message: 'Ivan', age: '23', likecount: 14},
        {id: 4, message: 'Eshe odin Ivan', age: '14', likecount: 24},
    ]

    let postElements = postData.map((post) => {
        return (<Post message={post.message} age={post.age} like={ post.likecount + ' like'} />)
    })

    return (
        <div className={style.postTemplate}>
            <h3>Myposts</h3>
            <div><textarea></textarea></div>
            <div><button>Add Post</button></div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default Myposts