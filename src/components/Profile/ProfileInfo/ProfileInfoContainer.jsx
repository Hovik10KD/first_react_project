import ProfileInfo from "./ProfileInfo";

const ProfileInfoContainer = (props) => {

    return (
        <ProfileInfo profileInfo={props.store.getState().profilePage.profileInfo} />
    )
}

export default ProfileInfoContainer;