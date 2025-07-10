import Link from "next/link";
import styles from "./cta.module.scss";

export default function Cta() {
  return (
    <div className={styles.section}>
      <h2>まずは無料で相談する！</h2>
      <p>
        まずはお問い合わせフォームからお気軽にご相談ください。オンライン通話にて対応可能です。
      </p>
      <Link href="/" className={styles.btn}>
        お問い合わせ
      </Link>
    </div>
  );
}
