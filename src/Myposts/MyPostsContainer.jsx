import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../redux/profile-reducer";
import Myposts from "./Myposts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)

export default MyPostsContainer