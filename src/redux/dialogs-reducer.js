const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogsData: [
        { id: 0, name: "user1" },
        { id: 1, name: "user2" },
        { id: 2, name: "user3" },
        { id: 3, name: "user4" }
    ],
    messagesData: [
        { id: 0, message: "message1" },
        { id: 1, message: "message2" },
        { id: 2, message: "message3" },
        { id: 3, message: "message4" }
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        case ADD_MESSAGE:
            let newMessage = {
                id: state.messagesData.length,
                message: state.newMessageText
            }

            state.messagesData.push(newMessage);
            state.newMessageText = '';

            return state;

        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: newText,
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE,
    }
}

export default dialogsReducer;