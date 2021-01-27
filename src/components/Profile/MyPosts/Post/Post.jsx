import classes from "./Post.module.css";
import profileImage from "../../../../images/profileImage.png";
import likeIcon from "../../../../images/like.png"

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.image}>
                <img src={profileImage} />
            </div>
            <div className={classes.postContent}>
                <p>{props.message}</p>
                <div className={classes.likes}>
                    <button><img src={likeIcon} /></button>
                    <span>{props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;