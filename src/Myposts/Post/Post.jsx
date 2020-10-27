import React from 'react';
import style from './Post.module.css'

function Post(props) {
    return (
        <div className={style.post}>
        <img src="https://trikky.ru/wp-content/blogs.dir/1/files/2020/05/16/screenshot_20200425_081212.jpg" />
            <div className={style.post_text}>{props.name}, {props.age} , {props.like}</div>
        </div>
    )
}

export default Post