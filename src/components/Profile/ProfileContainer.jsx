import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount() {
        if(this.props.match.params.userId != null){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(response => {
            this.props.setUserProfile(response.data);
        })}
        else{
            this.props.setUserProfile(null);
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return({});
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent);