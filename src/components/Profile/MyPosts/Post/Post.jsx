import classes from "./Post.module.css";
import profileImage from "../../../../images/profileImage.png";
import likeIcon from "../../../../images/likeOn.png";
import likeDefaultIcon from "../../../../images/likeOff.png";

const Post = (props) => {

    let likeToggle = () => {
        props.likeToggle(props.id);
    }

    return (
        <div className={classes.item}>
            <div className={classes.image}>
                <img src={profileImage} />
            </div>
            <div className={classes.postContent}>
                <p>{props.message}</p>
                <div className={classes.likes}>
                    <button onClick={likeToggle}><img src={props.likeStatus ? likeIcon : likeDefaultIcon} /></button>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;