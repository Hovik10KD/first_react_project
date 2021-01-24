import { NavLink } from "react-router-dom";
import classes from "./DialogItem.module.css";

const DialogItem = (props) => {

    let path = "/dialogs/" + props.userID;

    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.userName}</NavLink>
        </div>
    )
}

export default DialogItem;