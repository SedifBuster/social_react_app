import {createSelector} from "reselect";

const getUsers = (state) => {
    return state.usersPage.users
}
export const getUsersSelector = (state) => {
    return getUsers(state).filter(u => true)
}//обычный редюсер, без библиотеки

export const getUsersSuper = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})//cелектор который создан с селектором библиотеки

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}