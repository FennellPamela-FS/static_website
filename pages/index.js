import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Deploying A Static Website
        </h1>

        <p className={styles.description}>
          WDV463: 1.6 Exercise
        </p>

        <div className={styles.grid}>
          <span className={styles.card}>
            <h3>Course: &#127891;</h3>
            <p>Deployment of Web Applications</p>
          </span>

          <span className={styles.card}>
            <h3>Technology: &#127950;</h3>
            <p>Using Next.js under the hood.</p>
          </span>

          <span className={styles.card}>
            <h3>Code: &#128187;</h3>
            <p>Managed through GitHub</p>
          </span>

          <a href='https://cool-tapioca-70ff0d.netlify.app/' className={styles.card}>
            <h3>Live Server: &rarr;</h3>
            <p>Website shared on netlify</p>
          </a>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          &#128165; a Student
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}