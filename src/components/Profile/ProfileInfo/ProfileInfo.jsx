import classes from "./ProfileInfo.module.css";
import profileImage from "../../../images/profileImage.png";
import topImage from "../../../images/topImage.jpg";

const ProfileInfo = (props) => {
    
    return (
        <div>
            <img className={classes.topImage} src={topImage} />
            <div className={classes.profile}>
                <div className={classes.profileImage}>
                    <img src={profileImage} />
                </div>
                <div className={classes.info}>
                    <p className={classes.nameSurname}>{props.profileInfo.name} {props.profileInfo.surname}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;