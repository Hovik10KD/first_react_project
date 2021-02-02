import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount} likeStatus={post.likeStatus} likeToggle={props.likeToggle} />);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        props.updatePostText(e.target.value);
    }

    return (
        <div className={classes.myPosts}>
            <h1 className={classes.heading}>My Posts</h1>
            <div className={classes.addPost}>
                <textarea placeholder="Add your post" value={props.newPostText} onChange={onPostChange} />
                <div className={classes.buttons}>
                    <button className={classes.addPostButton} onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts;