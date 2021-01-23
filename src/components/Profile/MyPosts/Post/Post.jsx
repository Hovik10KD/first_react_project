import classes from "./Post.module.css";

const Post = (props) =>{
    return(
        <div className={classes.item}>
            <img src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"/>
            <p>{props.message}</p>
            <button>Like {props.likesCount}</button>
        </div>
    )
}

export default Post;