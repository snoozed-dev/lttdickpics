import Head from "next/head";
import styles from "../styles/bulge.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>linus bulge tips</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className={styles["bulge-container"]}>
        <img src="bulgin.png" />
      </div>
    </div>
  );
}
