import React from 'react';
import { connect } from 'react-redux';
import { emptyUsersActionCreator, followActionCreator, setCurentPageActionCreator, setUsersActionCreator, unfollowActionCreator, setTotalUsersCountActionCreator } from '../../redux/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            let action = followActionCreator(userID);
            dispatch(action);
        },
        unfollow: (userID) => {
            let action = unfollowActionCreator(userID);
            dispatch(action);
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action);
        },
        emptyUsers: () => {
            let action = emptyUsersActionCreator();
            dispatch(action);
        },
        setCurrentPage: (currentPage) => {
            let action = setCurentPageActionCreator(currentPage);
            dispatch(action);
        },
        setTotalUsersCount: (totalUsersCount) => {
            let action = setTotalUsersCountActionCreator(totalUsersCount);
            dispatch(action);
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;