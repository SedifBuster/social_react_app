import React from 'react';
import style from './Profile.module.css'
import Myposts from "../Myposts/Myposts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "../Myposts/MyPostsContainer";

function Profile(props) {

    return ( <div >
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer/>

    </div>)
}

export default Profile