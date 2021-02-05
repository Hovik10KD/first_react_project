import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import profileIcon from "../../images/personal-information.png"
import dialogsIcon from "../../images/dialogs.png"
import newsIcon from "../../images/news.png"
import musicIcon from "../../images/music.png"
import settingsIcon from "../../images/settings.png"
import findIcon from "../../images/search.png"

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><NavLink to="/profile" activeClassName={classes.active}><img title="Profile" src={profileIcon}/></NavLink></li>
                <li className={classes.item}><NavLink to="/dialogs" activeClassName={classes.active}><img title="Dialogs" src={dialogsIcon}/></NavLink></li>
                <li className={classes.item}><NavLink to="/news" activeClassName={classes.active}><img title="News" src={newsIcon}/></NavLink></li>
                <li className={classes.item}><NavLink to="/music" activeClassName={classes.active}><img title="Music" src={musicIcon}/></NavLink></li>
                <li className={classes.item}><NavLink to="/users" activeClassName={classes.active}><img title="Find Users" src={findIcon}/></NavLink></li>
                <li className={classes.item}><NavLink to="/settings" activeClassName={classes.active}><img title="Settings" src={settingsIcon}/></NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;