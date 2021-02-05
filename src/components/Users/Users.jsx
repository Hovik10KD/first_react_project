import React from 'react';
import classes from './Users.module.css';

const User = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'userName', status: 'user status', location: { city: 'Kapan', country: 'Armenia' }, fallowed: true },
            { id: 2, photoURL: 'https://cdn1.vectorstock.com/i/thumb-large/62/60/default-avatar-photo-placeholder-profile-image-vector-21666260.jpg', fullName: 'userName', status: 'user status', location: { city: 'Yerevan', country: 'Armenia' }, fallowed: false },
        ]);
    }

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
export default User;