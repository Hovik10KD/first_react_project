import React, { useEffect } from 'react';
import classes from './Users.module.css';

const Users = (props) => {

    useEffect(() => {
        props.setUsers([
            { id: 1, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 1', status: 'user status 1', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: true },
            { id: 2, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 2', status: 'user status 2', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 3, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 3', status: 'user status 3', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 4, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 4', status: 'user status 4', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 5, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 5', status: 'user status 5', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: true },
            { id: 6, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 6', status: 'user status 6', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: true },
            { id: 7, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 7', status: 'user status 7', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 8, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 8', status: 'user status 8', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 9, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 9', status: 'user status 9', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 10, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 10', status: 'user status 10', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 11, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 11', status: 'user status 11', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: true },
            { id: 12, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 12', status: 'user status 12', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 13, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 13', status: 'user status 13', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 14, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 14', status: 'user status 14', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 15, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 15', status: 'user status 15', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 16, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 16', status: 'user status 16', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
            { id: 17, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 17', status: 'user status 17', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: true },
            { id: 18, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'user Name 18', status: 'user status 18', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
        ]);
    }, []);


    return (
        <div className={classes.content}>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id} className={classes.user}>
                            <div className={classes.profilePhoto}>
                                <img src={user.photoURL} />
                            </div>
                            <div>
                                <div>
                                    <div className={classes.userInform}>
                                        <p className={classes.userName}>{user.fullName}</p>
                                        <p className={classes.userStatus}>{user.status}</p>
                                    </div>

                                    <div className={classes.location}>
                                        <p className={classes.country}>{user.location.country}</p>
                                        <p className={classes.city}>{user.location.city}</p>
                                    </div>
                                </div>
                                <div className={classes.Buttons}>
                                    {user.fallowed ? <button className={classes.unfollowButton} onClick={() => { props.unfollow(user.id) }}>Unfollow</button> : <button className={classes.followButton} onClick={() => { props.follow(user.id) }}>Follow</button>}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Users;