import React from 'react';
import style from './Myposts.module.css'
import Post from "./Post/Post";

let addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
let updatePostTextActioncreator = (text) => {
    return {
        type: 'UPDATE-POST-TEXT',
        newText: text
    }
}

function Myposts(props) {


    let postElements = props.postData.map((post) => {
        return (<Post message={post.message} age={post.age} like={post.likecount + ' like'}/>)
    })

    let newPostElement = React.createRef()

    let addPost = () => {
       // props.addPost()
        props.dispatch( addPostActionCreator)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
       // props.updatePostText(text)
        let action = updatePostTextActioncreator(text)
        props.dispatch( action)
    }


    return (
        <div className={style.postTemplate}>
            <h3>Myposts</h3>
            <div><textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/></div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default Myposts