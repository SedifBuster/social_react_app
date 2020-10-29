import React from 'react';
import style from './Profile.module.css'
import Myposts from "../Myposts/Myposts";
import ProfileInfo from "./Profileinfo/ProfileInfo";

function Profile(props) {


    return ( <div >
        <ProfileInfo/>
        <Myposts id={props.postData.id} postData={props.postData}/>
    </div>)
}

export default Profile