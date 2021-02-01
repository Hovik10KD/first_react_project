import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator, likeToggleActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let updatePostText = (newText) => {
        let action = updateNewPostTextActionCreator(newText);
        props.store.dispatch(action);
    }

    let likeToggle = (postID) => {
        let action = likeToggleActionCreator(postID);
        props.store.dispatch(action);
    }

    return (
        <MyPosts addPost={addPost}
            updatePostText={updatePostText}
            likeToggle={likeToggle}
            postsData={props.store.getState().profilePage.postsData}
            newPostText={props.store.getState().profilePage.newPostText} />
    )
}

export default MyPostsContainer;