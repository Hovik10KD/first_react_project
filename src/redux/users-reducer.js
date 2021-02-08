const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const EMPTY_USERS = 'EMPTY-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    users: [],
    pageSize: 12,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case FOLLOW:

            stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, fallowed: true };
                    }

                    return user;
                })
            }

            return stateCopy;

        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return { ...user, fallowed: false };
                    }

                    return user;

                })
            }

            return stateCopy;

        case SET_USERS:

            stateCopy = { ...state, users: action.users }

            return stateCopy;

        case EMPTY_USERS:
            stateCopy = { ...state, users: [] }

            return stateCopy;

        case SET_CURRENT_PAGE:

            stateCopy = { ...state, currentPage: action.currentPage };

            return stateCopy;

        case SET_TOTAL_USERS_COUNT:
            stateCopy = { ...state, totalUsersCount: action.totalUsersCount }
            return stateCopy;

        default:
            return state;
    }
}

export const followActionCreator = (userID) => {
    return {
        type: FOLLOW,
        userID: userID
    }
}

export const unfollowActionCreator = (userID) => {
    return {
        type: UNFOLLOW,
        userID: userID
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export const emptyUsersActionCreator = () => {
    return {
        type: EMPTY_USERS,
    }
}

export const setCurentPageActionCreator = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}
export default usersReducer;