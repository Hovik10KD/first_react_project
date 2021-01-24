import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Messge/Message";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                <DialogItem userName="user1" userID="1" />
                <DialogItem userName="user2" userID="2" />
                <DialogItem userName="user3" userID="3" />
                <DialogItem userName="user4" userID="4" />
            </div>

            <div className={classes.messages}>
                <Message message="message1" />
                <Message message="message2" />
                <Message message="message3" />
                <Message message="message3" />
            </div>
        </div>
    )
}

export default Dialogs;