import React from 'react';
import style from './Myposts.module.css'
import Post from "./Post/Post";


function Myposts(props) {

    let postElements = props.profilePage.postData.map((post) => {
        return (<Post message={post.message} age={post.age} like={post.likecount + ' like'}/>)
    })
    let newPostElement = React.createRef()
    let onAddPost = () => { props.addPost() }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }


    return (
        <div className={style.postTemplate}>
            <h3>Myposts</h3>
            <div><textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.newPostText}/></div>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default Myposts