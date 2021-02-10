const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const LIKE_TOGGLE = 'TOGGLE-LIKE'

let initialState = {
    profileInfo: {
        name: 'Hovik',
        surname: 'Gasparyan'
    },
    postsData: [
        { id: 0, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", likesCount: 10, likeStatus: true },
        { id: 1, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", likesCount: 9, likeStatus: false },
        { id: 2, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", likesCount: 10, likeStatus: false },
        { id: 3, message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum", likesCount: 15, likeStatus: true }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case UPDATE_NEW_POST_TEXT:

            stateCopy = {
                ...state,
                newPostText: action.newText
            }

            return stateCopy;

        case ADD_POST:

        let newPost = {
            id: state.postsData.length,
            message: state.newPostText,
            likesCount: 0,
            likeStatus: false
        };
            
        stateCopy = {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost],
            }

            return stateCopy;

        case LIKE_TOGGLE:

            stateCopy = {
                ...state,
                postsData: [...state.postsData]
            }

            stateCopy.postsData[action.postID] = { ...state.postsData[action.postID] };

            stateCopy.postsData[action.postID].likeStatus ? stateCopy.postsData[action.postID].likesCount-- : stateCopy.postsData[action.postID].likesCount++;
            stateCopy.postsData[action.postID].likeStatus = !stateCopy.postsData[action.postID].likeStatus;
            
            return stateCopy;

        default:
            return state;
    }
}

export const updatePostText = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText,
    }
}

export const addPost = () => {
    return {
        type: ADD_POST,
    }
};

export const likeToggle = (postID) => {
    return {
        type: LIKE_TOGGLE,
        postID: postID
    }
}

export default profileReducer;