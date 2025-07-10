import Container from "@/app/_components/common/container/container";
import Link from "next/link";
import styles from "./faq.module.scss";
import { IoArrowForward } from "react-icons/io5";
import Btn from "@/app/_components/common/btn/btn";
import { filteredFAQsForTopPage } from "@/app/_utils/faq";

export default function Faq2() {
  const data = filteredFAQsForTopPage();

  return (
    <section className={styles.faq}>
      <Container>
        <span className={styles.en}>Q&A</span>
        <h2>よくあるご質問</h2>

        <ul className={styles.list}>
          {data.map((faq) => (
            <li className={styles.item}>
              <div className={styles.question}>
                <span className={styles.qIcon}>Q.</span>
                <h3>{faq.question}</h3>
              </div>
              <div className={styles.answer}>
                <span className={styles.aIcon}>A.</span>
                <div>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.linkWrap}>
          <Btn href="/faq" icon="arrow">
            よくあるご質問
          </Btn>
        </div>
      </Container>
    </section>
  );
}
