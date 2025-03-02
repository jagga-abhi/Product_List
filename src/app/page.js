import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <Link href="/addproduct" className={styles.button}>Add Products</Link>
       
      </div>
      <div className={styles.card}>
      <Link href="/products" className={styles.button}>Products</Link>
      </div>
    </main>
  );
}
