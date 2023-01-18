import Head from "../components/head";
import { Ultra } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";
import useCopyToClipboard from "../hooks/useCopyToClipboard";

const ultra = Ultra({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  const [, copy] = useCopyToClipboard();

  return (
    <>
      <Head />
      <main className={styles.main}>
        <h1 className={clsx(ultra.className, styles.header)}>0width</h1>

        <div className={styles.buttonContainer}>
          <button
            className={clsx(styles.button, ultra.className)}
            onClick={() => {
              // There's a 0 width character here.
              copy("​");
            }}
            aria-label="Copy 0 width character to clipboard"
          >
            <div className={styles.key}>
              <div className={styles.keyInner}>Copy</div>
            </div>
            <div className={styles.overlay} />
          </button>
        </div>
      </main>
    </>
  );
}
