import React from "react";
import style from "./Users.module.css";
import userPhoto from "../assets/images/user.jpg";

function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++) {
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
                            <img src={users.photos.small != null ? users.photos.small : userPhoto}
                                 className={style.photo}/>
                        </div>
                        <div>
                            {users.followed ? <button onClick={() => {
                                    props.unfollow(users.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(users.id)
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