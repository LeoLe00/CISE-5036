import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Suggest</a></li>
                    <li><a href="#">Moderate</a></li>
                    <li><a href="#">Analyse</a></li>
                </ul>
            </nav>
            <h1 className={styles.h1}>SPEED</h1>
            <div className={styles.counterBalanceNav}></div>
        </header>
    )
}

export default Header;