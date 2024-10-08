import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>BookStorage</h1>
        <Footer/>
      </main>
    </div>
  );
}
