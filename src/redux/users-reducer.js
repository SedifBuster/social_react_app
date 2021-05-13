import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: true}
                    }
                    return users
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followed: false}
                    }
                    return users
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)}
        default:
            return state
    }
}


export let followSucces = (userId) => { return {type: FOLLOW, userId}}
export let unfollowSucces = (userId) => { return {type: UNFOLLOW, userId}}
export let setUsers = (users) => { return {type: SET_USERS, users}}
export let setCurrentPage = (currentPage) => { return {type: SET_CURRENT_PAGE,currentPage: currentPage}}
export let setTotalUsersCount = (totalUsersCount) => { return {type: SET_TOTAL_USERS_COUNT, count: totalUsersCount}}
export let toggleIsFetching = (isFetching) => { return {type: TOGGLE_IS_FETCHING, isFetching} }
export let toggleFollowingProgress = (isFetching, userId) => { return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId }}


export const requestUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch (toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (followSucces(userId))
                }
                dispatch (toggleFollowingProgress(false, userId))
            })
        }
    }
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch (toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch (unfollowSucces(userId))
                }
                dispatch (toggleFollowingProgress(false, userId))
            })
    }
}


export default usersReducer