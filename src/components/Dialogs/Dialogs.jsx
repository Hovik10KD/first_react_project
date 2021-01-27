import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Messge/Message";

const Dialogs = (props) => {
    
    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem userName={dialog.name} userID={dialog.id} />);

    let messagesElement = props.dialogsPage.messagesData.map(message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;