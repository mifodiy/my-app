const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initial = {
    users: [ {id: 1, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
        followed: true, fullName: 'Dmitriy', status: 'God is hear', location:{city: 'Odessa', country: 'Ukraine'}},
        {id: 2, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            followed: false, fullName: 'Vova', status: 'God is not hear', location:{city: 'Kyiv', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg',
            followed: true, fullName: 'Dmitriy', status: 'God is hear', location:{city: 'Lviv', country: 'Ukraine'}}]
}

const usersReducer = (state=initial,action) =>{
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed:true}
                    }
                    return u
            })
            }

        case UNFOLLOW:{
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed:false}
                    }
                    return u
                })
            }
        }
        case SET_USERS:{
            return {
                ...state,
                users: [...state.users,...action.users]
            }
        }
        default:
            return state

    }
}

export const followAC = (userId) =>{
return {
    type:FOLLOW,
    userId
}
}
export const unfollowAC = (userId) =>{
    return{
        type:UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users) =>{
    return{
        type:SET_USERS,
        users
    }
}

export default usersReducer