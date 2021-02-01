import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Messge/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map(dialog => <DialogItem userName={dialog.name} userID={dialog.id} />);

    let messagesElement = props.messagesData.map(message => <Message message={message.message} />);

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        props.updateMessageText(e.target.value)
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesElement}
                <textarea value={props.newMessageText} onChange={onMessageChange} placeholder="Enter your message" />
                <button onClick={onAddMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;