import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import userDefaultImage from '../../images/user.png';

class Users extends React.Component {

    constructor(props) {

        super(props);

    }

    setCurrentPage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {

            this.props.setUsers(response.data.items);
        })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        })
    }
    
    componentWillUnmount() {
        this.props.emptyUsers();
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {

            if (i >= this.props.currentPage - 2 && i < this.props.currentPage + 3) {
                pages.push(i);
            } else if (i < this.props.currentPage - 2 && pages[0] != '...') {
                pages.unshift(['...', 'first']);
                i = this.props.currentPage - 3;
            } else if (i >= this.props.currentPage + 3) {
                pages.push(['...', 'last']);
                break;
            }
        }

        return (
            <div>
                <div className={classes.content}>
                    {
                        this.props.users.map(user => {
                            return (
                                <div key={user.id} className={classes.user}>
                                    <div className={classes.profilePhoto}>
                                        <img src={user.photos.small != null ? user.photos.small : userDefaultImage} />
                                    </div>
                                    <div>
                                        <div>
                                            <div className={classes.userInform}>
                                                <p className={classes.userName}>{user.name}</p>
                                                <p className={classes.userStatus}>{user.status != null ? user.status : 'status'}</p>
                                            </div>

                                            <div className={classes.location}>
                                                <p className={classes.country}>{"country"}</p>
                                                <p className={classes.city}>{"city"}</p>
                                            </div>
                                        </div>
                                        <div className={classes.Buttons}>
                                            {user.fallowed ? <button className={classes.unfollowButton} onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button> : <button className={classes.followButton} onClick={() => { this.props.follow(user.id) }}>Follow</button>}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={classes.pages}>
                    <div>
                        {pages.map(page => {
                            if (typeof page === 'object') {
                                return (
                                    <div key={page[1]} className={`${classes.pageNumber}`}>{page[0]}</div>
                                )
                            } else {
                                return (
                                    <div key={page} onClick={(e) => { this.setCurrentPage(page); }} className={this.props.currentPage === page ? `${classes.active} ${classes.pageNumber}` : `${classes.pageNumber}`}>{page}</div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Users;