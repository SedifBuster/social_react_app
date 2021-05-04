import React from 'react';
import style from './Profile.module.css'
import Myposts from "../Myposts/Myposts";
import ProfileInfo from "./Profileinfo/ProfileInfo";
import MyPostsContainer from "../Myposts/MyPostsContainer";

function Profile(props) {

    return ( <div >
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer/>

    </div>)
}

export default Profile