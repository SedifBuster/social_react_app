import React from "react";
import style from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../assets/images/user.jpg'

class Users extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>

                {
                    this.props.users.map(users => <div key={users.id}>
                    <span>
                        <div>
                            <img src={users.photos.small != null ? users.photos.small : userPhoto} className={style.photo}/>
                        </div>
                        <div>
                            { users.followed ? <button onClick={() => {this.props.unfollow(users.id)}}>Unfollow</button>
                                : <button onClick={() => {this.props.follow(users.id)}}>Follow</button>}
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
        )
    }

}









export default Users