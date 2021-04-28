import React from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";


function ProfileInfo(props) {

    if(!props.profile) {
        return <Preloader />
    }
    return (<div>
        <div><img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'
                  alt=''alt='' className={style.logo}/></div>
        <div>
            <img src={props.profile.photos.large}/>
            <img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' alt='' className={style.avatar}/>
            <p>{props.profile.fullName}</p>
            <div>
                <p>Ищу ли я работу {props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <p>facebook {props.profile.contacts[0]}</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
        <div>{props.profile.aboutMe}</div>
    </div>)
}

export default ProfileInfo