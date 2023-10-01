import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <li className={styles.li}><a href="./">Home Search</a></li>
                    <li className={styles.li}><a href="./suggest">Suggest</a></li>
                    <li className={styles.li}><a href="./moderate">Moderate</a></li>
                    <li className={styles.li}><a href="./analyse">Analyse</a></li>
                </ul>
            </nav>
            <h1 className={styles.h1}>SPEED</h1>
            <div className={styles.counterBalanceNav}></div>
        </header>
    )
}

export default Header;