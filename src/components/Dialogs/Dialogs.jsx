import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Messge/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    
    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem userName={dialog.name} userID={dialog.id} />);

    let messagesElement = props.dialogsPage.messagesData.map(message => <Message message={message.message} />);

    let addMessage = () => {
        let action = addMessageActionCreator()
        props.dispatch(action);
    }

    let onMessageChange = (e) => {
        let action = updateNewMessageTextActionCreator(e.target.value);
        props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesElement}
                <textarea value={props.dialogsPage.newMessageText} onChange={onMessageChange} placeholder="Enter your message" />
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;