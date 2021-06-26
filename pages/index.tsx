import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, distinctio veniam alias cum cupiditate dolorem perspiciatis fuga iure itaque iusto impedit, iste veritatis, consequatur aut nesciunt? Impedit officiis natus reiciendis.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninjas Listing</a></Link>
      </div>
    </>
  );
}
