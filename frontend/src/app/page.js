import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <body>
      <main className={styles.main}>
        <header> <a className={styles.title}>SPEED</a> 
        </header>
        <a className={styles.title}>HdI</a>
      </main>
    </body>
  )
}
