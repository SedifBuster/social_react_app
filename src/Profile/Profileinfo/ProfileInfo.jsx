import React from 'react';
import style from './ProfileInfo.module.css'


function ProfileInfo() {
    return (<div>
        <div><img src='https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg'
                  alt=''alt='' className={style.logo}/></div>
        <div><img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' alt='' className={style.avatar}/>
        </div>
        <div>description</div>
    </div>)
}

export default ProfileInfo