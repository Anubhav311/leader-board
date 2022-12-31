import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h3>Leader Board</h3>
        </div>
        <table>
          <tr>
            <th>S. No.</th>
            <th>Name</th>
            <th>Commits</th>
            <th>Rank</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Vicky</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Vikash</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Sagar</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Saransh</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Harsh</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
