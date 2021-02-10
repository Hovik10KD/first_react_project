import classes from "./ProfileInfo.module.css";
import profileImage from "../../../images/profileImage.png";
import topImage from "../../../images/topImage.jpg";

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={classes.topImage} src={topImage} />
            <div className={classes.profile}>
                <div className={classes.profileImage}>
                    <img src={props.profile === null ? profileImage : props.profile.photos.small} />
                </div>
                <div className={classes.info}>
                    <p className={classes.nameSurname}>{props.profile === null ? `${props.profileInfo.name} ${props.profileInfo.surname}` : props.profile.fullName}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;