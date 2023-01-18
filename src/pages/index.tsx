import Head from "../components/head";
import { Ultra, Slabo_27px } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import clsx from "clsx";
import useCopyToClipboard from "../hooks/useCopyToClipboard";
import Image from "next/image";

const ultra = Ultra({ weight: ["400"], subsets: ["latin"] });
const slabo = Slabo_27px({ weight: ["400"], subsets: ["latin"] });

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

        <div className={styles.details}>
          <h2 className={ultra.className}>Use Cases</h2>
          <div>
            <Card>
              <Image
                src="/example.png"
                alt="Start a tweet with a 0 width character instead of a . so the tweet doesn't get categorized as a reply."
                // width={565}
                // height={165.5}
                priority
                fill={true}
                style={{ objectFit: "contain" }}
              />
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className={clsx(slabo.className, styles.card)}>{children}</article>
  );
};
