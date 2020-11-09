import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../redux/profile-reducer";
import Myposts from "./Myposts";


function MyPostsContainer(props) {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updatePostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <Myposts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 postData={state.profilePage.postData}
        />

    )
}

export default MyPostsContainer