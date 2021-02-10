import React from 'react';
import { connect } from 'react-redux';
import { addPost, updatePostText, likeToggle } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


// const MyPostsContainer = (props) => {

//     let addPost = () => {
//         let action = addPostActionCreator();
//         props.store.dispatch(action);
//     }

//     let updatePostText = (newText) => {
//         let action = updateNewPostTextActionCreator(newText);
//         props.store.dispatch(action);
//     }

//     let likeToggle = (postID) => {
//         let action = likeToggleActionCreator(postID);
//         props.store.dispatch(action);
//     }

//     return (
//         <MyPosts addPost={addPost}
//             updatePostText={updatePostText}
//             likeToggle={likeToggle}
//             postsData={props.store.getState().profilePage.postsData}
//             newPostText={props.store.getState().profilePage.newPostText} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: () => {
//             let action = addPostActionCreator();
//             dispatch(action);
//         },
//         updatePostText: (newText) => {
//             let action = updateNewPostTextActionCreator(newText);
//             dispatch(action);
//         },
//         likeToggle: (postID) => {
//             let action = likeToggleActionCreator(postID);
//             dispatch(action);
//         }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {
    addPost,
    updatePostText,
    likeToggle,
})(MyPosts);

export default MyPostsContainer;