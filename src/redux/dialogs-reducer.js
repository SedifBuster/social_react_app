const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'



let initialState = {
    dialogsData: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Keit'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Stanislav'},
        {id: 7, name: ' oi boy'},
        {id: 8, name: 'next door'}
    ],
    messageData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are You?'},
        {id: 3, message: 'Letsgo dota'},
        {id: 4, message: 'fast'},
        {id: 5, message: 'faster'},
    ],
    newMessageText: 'it-incubator'
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}


export let sendMessageCreator = () => {return { type: ADD_MESSAGE }}
export let updateNewMessageTextCreator = (text) => {
    return {  type: UPDATE_MESSAGE_TEXT, newText: text }
}


export default dialogsReducer