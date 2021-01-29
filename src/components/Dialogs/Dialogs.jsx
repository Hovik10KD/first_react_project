import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Messge/Message";

const Dialogs = (props) => {
    
    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem userName={dialog.name} userID={dialog.id} />);

    let messagesElement = props.dialogsPage.messagesData.map(message => <Message message={message.message} />);

    let newMessageText = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        props.updateNewMessageText(newMessageText.current.value);
    }

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesElement}
                <textarea ref={newMessageText} value={props.dialogsPage.newMessageText} onChange={onMessageChange} />
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs;