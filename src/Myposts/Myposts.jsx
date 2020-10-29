import React from 'react';
import style from './Myposts.module.css'
import Post from "./Post/Post";

function Myposts(props) {


    let postElements = props.postData.map((post) => {
        return (<Post message={post.message} age={post.age} like={post.likecount + ' like'} />)
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