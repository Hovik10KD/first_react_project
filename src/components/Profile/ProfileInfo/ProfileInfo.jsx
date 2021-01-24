import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <img className={classes.topImage} src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg" />
            <div className={classes.profile}>
                img + description
            </div>
        </div>
    )
}

export default ProfileInfo;