import ProfileInfo from "./ProfileInfo";
import { connect } from "react-redux";

// const ProfileInfoContainer = (props) => {

//     return (
//         <ProfileInfo profileInfo={props.store.getState().profilePage.profileInfo} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);

export default ProfileInfoContainer;