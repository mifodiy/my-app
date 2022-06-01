const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_COUNT = 'SET_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS'

let initial = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: []

};

const usersReducer = (state = initial, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.page}
        }
        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : [...state.followingProgress.filter(id => id != action.userId)]
            }
        }
        default:
            return state

    }
}

export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}
export const setUsersCount = (count) => {
    return {
        type: SET_USERS_COUNT,
        count: count
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}
export default usersReducer