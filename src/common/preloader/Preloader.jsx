import React from "react";
import style from "../preloader/Preloader.module.css";


function Preloader(props) {

    return <div className={style.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader