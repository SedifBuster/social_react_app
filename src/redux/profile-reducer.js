const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'


let initialState = {
    postData: [
        {id: 1, message: 'Ilya', age: '30', likecount: 16},
        {id: 2, message: 'Petr', age: '15', likecount: 13},
        {id: 3, message: 'Ivan', age: '23', likecount: 14},
        {id: 4, message: 'Eshe odin Ivan', age: '14', likecount: 24},
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likecount: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}



export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export let updatePostTextActionCreator = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        newText: text
    }
}

export default profileReducer