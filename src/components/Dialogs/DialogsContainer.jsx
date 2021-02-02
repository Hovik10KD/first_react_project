import React from "react";
import { connect } from "react-redux";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {

//     let addMessage = () => {
//         let action = addMessageActionCreator()
//         props.store.dispatch(action);
//     }

//     let updateMessageText = (newText) => {
//         let action = updateNewMessageTextActionCreator(newText);
//         props.store.dispatch(action);
//     }

//     return (
//         <Dialogs addMessage={addMessage}
//             updateMessageText={updateMessageText}
//             messagesData={props.store.getState().dialogsPage.messagesData}
//             dialogsData={props.store.getState().dialogsPage.dialogsData}
//             newMessageText={props.store.getState().dialogsPage.newMessageText}
//         />
//     )
// };


let mapStateToProps = (state) => {
    return {
        messagesData: state.dialogsPage.messagesData,
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (newText) => {
            let action = updateNewMessageTextActionCreator(newText);
            dispatch(action);
        },
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;