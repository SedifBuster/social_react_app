import React from 'react';
import style from './Profile.module.css'
import Myposts from "../Myposts/Myposts";

function Profile() {
    return ( <div >
        <div><img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'  alt=''/></div>
        <div><img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' alt=''/></div>
        <Myposts />
    </div>)
}

export default Profile