import classes from "./Header.module.css";
import LogoIcon from "../../images/logo.png"

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src={LogoIcon} />
        </header>
    )
}

export default Header;