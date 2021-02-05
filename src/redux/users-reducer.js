const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: []
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
            stateCopy = { ...state, users: [...state.users, ...action.users] }
            // stateCopy = { ...state, users: action.users }

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

export default usersReducer;