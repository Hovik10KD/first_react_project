import React from 'react';
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () =>{
        props.updateNewPostText(newPostElement.current.value);
    }

    return (
        <div className={classes.myPosts}>
            <h1 className={classes.heading}>My Posts</h1>
            <div className={classes.addPost}>
                <textarea ref={newPostElement } placeholder="Add your post" value={props.newPostText} onChange={onPostChange}/>
                <div className={classes.buttons}>
                    <button className={classes.addPostButton} onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    )
}

export default MyPosts;