import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Good Morning, Michael 👋
        </h1>

        <p className={styles.description}>
          Leave requests
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
          <h3>Looks like Hung is not doing well this morning</h3>
            <img src="pics/Hung.png" width="140"/>
            <p>Sick leave - 8 hours</p>
            
            <button className={styles.primaryButton}>Approve</button>
            <button className={styles.secondaryButton}>Fire Hung</button>
            
          </a>

          <a className={styles.card}>
          <h3>Looks like Mick is not doing well this morning</h3>
            <img src="pics/Hung.png" width="140"/>
            <p>Sick leave - 8 hours</p>
            
            <button className={styles.primaryButton}>Approve</button>
            <button className={styles.secondaryButton}>Fire Hung</button>
            
          </a>


          <a className={styles.card}>
          <h3>Looks like Maddy is not doing well this morning</h3>
          
            <img src="pics/Hung.png" width="140"/>
            <p>Sick leave - 8 hours</p>
            
            <button className={styles.primaryButton}>Approve</button>
            <button className={styles.secondaryButton}>Fire Hung</button>
            
          </a>

          <a className={styles.card}>
          <h3>Looks like Oscar is not doing well this morning</h3>
          <img src="pics/Hung.png" width="140"/>
          <p>Sick leave - 8 hours</p>
          <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
            <button className={styles.primaryButton}>Approve</button>
            <button className={styles.secondaryButton}>Fire Hung</button>
          </div>
            
          </a>

         
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
