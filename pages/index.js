import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Boilerplate by <a href="https://marciofrancalima.com.br">Márcio França Lima</a>
        </p>
      </main>
    </div>
  )
}
