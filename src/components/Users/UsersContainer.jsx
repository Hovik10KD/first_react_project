import React from 'react';
import { connect } from 'react-redux';
import { emptyUsers, follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from '../../redux/users-reducer';
import UsersAPIComponent from './UsersAPIComponent';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             let action = followActionCreator(userID);
//             dispatch(action);
//         },
//         unfollow: (userID) => {
//             let action = unfollowActionCreator(userID);
//             dispatch(action);
//         },
//         setUsers: (users) => {
//             let action = setUsersActionCreator(users);
//             dispatch(action);
//         },
//         emptyUsers: () => {
//             let action = emptyUsersActionCreator();
//             dispatch(action);
//         },
//         setCurrentPage: (currentPage) => {
//             let action = setCurentPageActionCreator(currentPage);
//             dispatch(action);
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             let action = setTotalUsersCountActionCreator(totalUsersCount);
//             dispatch(action);
//         },
//         toggleIsFetching: (isFetching) => {
//             let action = toggleIsFetchingActionCreator(isFetching);
//             dispatch(action);
//         }
//     }
// }

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    emptyUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
})(UsersAPIComponent);

export default UsersContainer;