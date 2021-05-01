import React from "react";
import style from "./Users.module.css";
import userPhoto from "../assets/images/user.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && style.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(page)
                             }}>{page}</span>
            })}
        </div>

        {
            props.users.map(users => <div key={users.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + users.id}>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                 className={style.photo}/>
                             </NavLink>
                        </div>
                        <div>
                            {users.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API_KEY" : "1840c2b6-5ac3-4708-aee3-57428103255c"
                                        }
                                    })
                                        .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(users.id)
                                        }
                                    })


                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API_KEY" : "1840c2b6-5ac3-4708-aee3-57428103255c"
                                        }})
                                        .then(response => {
                                            if (response.data.resultCode == 0) {
                                                props.follow(users.id)
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>
                                {users.name}
                            </div>
                            <div>
                                {users.status}
                            </div>
                        </span>
                        <span>
                            <div>
                                {"users.location.city"}
                            </div>
                            <div>
                                {"users.location.country"}
                            </div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}


export default Users