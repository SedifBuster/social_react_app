import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'



let initialState = {
    postData: [
        {id: 1, message: 'Ilya', age: '30', likecount: 16},
        {id: 2, message: 'Petr', age: '15', likecount: 13},
        {id: 3, message: 'Ivan', age: '23', likecount: 14},
        {id: 4, message: 'Eshe odin Ivan', age: '14', likecount: 24},
    ],
    newPostText: 'it-kamasutra',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0
            }
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText:action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }

        default:
            return state
    }
}



export let addPostActionCreator = () => { return {type: ADD_POST}}
export let setUserProfile = (profile) => { return {type: SET_USER_PROFILE, profile}}
export let updatePostTextActionCreator = (text) => { return {type: UPDATE_POST_TEXT, newText: text}}

export let getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch (setUserProfile(response.data))
    })
}



export default profileReducer