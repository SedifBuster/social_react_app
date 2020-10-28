import React from 'react';
import style from './Profile.module.css'
import Myposts from "../Myposts/Myposts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

function Profile() {
    return ( <div >
        <ProfileInfo/>
        <Myposts />
    </div>)
}

export default Profile