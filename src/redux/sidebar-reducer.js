let initialState = {
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


const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer