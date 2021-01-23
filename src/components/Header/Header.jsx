import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" />
        </header>
    )
}

export default Header;