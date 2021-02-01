import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let addPost = () => {
        let action = addPostActionCreator();
        props.dispatch(action);
    }

    let onPostChange = (e) =>{
        let action = updateNewPostTextActionCreator(e.target.value);
        props.dispatch(action);
    }

    return (
        <div className={classes.myPosts}>
            <h1 className={classes.heading}>My Posts</h1>
            <div className={classes.addPost}>
                <textarea placeholder="Add your post" value={props.newPostText} onChange={onPostChange}/>
                <div className={classes.buttons}>
                    <button className={classes.addPostButton} onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts;