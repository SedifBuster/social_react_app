import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Ilya', age: '30', likecount: 16},
                {id: 2, message: 'Petr', age: '15', likecount: 13},
                {id: 3, message: 'Ivan', age: '23', likecount: 14},
                {id: 4, message: 'Eshe odin Ivan', age: '14', likecount: 24},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Sanya', img: 'https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg'},
                {id: 2, name: 'Gleb', img: 'https://i.pinimg.com/236x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg'},
                {
                    id: 3,
                    name: 'Vlad',
                    img: 'https://proprikol.ru/wp-content/uploads/2020/02/kartinki-na-avatarku-dlya-parnej-i-muzhchin-1-1.jpg'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state is proper changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch( action ) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)
    }
  }




export default store