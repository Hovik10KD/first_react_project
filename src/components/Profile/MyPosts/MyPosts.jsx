import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={classes.myPosts}>
            <h1 className={classes.heading}>My Posts</h1>
            <div className={classes.addPost}>
                <textarea placeholder="Add your post"></textarea>
                <div className={classes.buttons}>
                    <button className={classes.addPostButton}>Add post</button>
                    <button className={classes.removePostButton}>Remove</button>
                </div>
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts;