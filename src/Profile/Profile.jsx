import React from 'react';
import style from './Profile.module.css'
import Myposts from "../Myposts/Myposts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

function Profile(props) {


    return ( <div >
        <ProfileInfo/>
        <Myposts id={props.profilePage.postData.id}
                 newPostText={props.profilePage.newPostText}
                 postData={props.profilePage.postData}
                 dispatch={props.dispatch}

        />

    </div>)
}

export default Profile