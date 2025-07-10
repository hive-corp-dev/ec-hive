import Breadcrumb from "../breadcrumb/breadcrumb";
import Container from "../container/container";
import styles from "./sub-mv.module.scss";

export default function SubMv({ jpTitle, enTitle, breadcrumbPaths, hasBorder }) {
  return (
    <section className={`${styles.section} ${hasBorder && styles.hasBorder}`}>
      <Container>
        <h1 className={styles.title} data-en={enTitle}>
          {jpTitle}
        </h1>

        <Breadcrumb paths={breadcrumbPaths} />
      </Container>
    </section>
  );
}
