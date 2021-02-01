import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.store.dispatch(action);
    }

    let updateMessageText = (newText) => {
        let action = updateNewMessageTextActionCreator(newText);
        props.store.dispatch(action);
    }

    return (
        <Dialogs addMessage={addMessage}
            updateMessageText={updateMessageText}
            messagesData={props.store.getState().dialogsPage.messagesData}
            dialogsData={props.store.getState().dialogsPage.dialogsData}
            newMessageText={props.store.getState().dialogsPage.newMessageText}
        />
    )
}

export default DialogsContainer;