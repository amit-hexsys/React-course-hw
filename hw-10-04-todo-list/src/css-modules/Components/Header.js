import styles from "./Header.module.css";

const Header = () => {

    return (
        <header className={styles.header}>
            <img src="memo-emoji.png" className={styles.logoimg}></img>
            <h1 className={styles.apptitle}>To Do List</h1>
        </header>
    );
}

export default Header;