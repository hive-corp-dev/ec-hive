import styles from "./section-title.module.scss";

export default function SectionTitle({ enTitle, jpTitle, isWhite }) {
  return (
    <div className={`${styles.wrap} ${isWhite && styles.isWhite}`}>
      <span className={styles.enTitle}>
        <span>{enTitle}</span>
      </span>
      <span className={styles.jpTitle}>{jpTitle}</span>
    </div>
  );
}
