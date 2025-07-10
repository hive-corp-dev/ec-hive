import Container from "@/app/_components/common/container/container";
import styles from "./plan.module.scss";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import PlanOverview from "@/app/_components/plan/plan-overview/plan-overview";
import Btn from "@/app/_components/common/btn/btn";
import Image from "next/image";

export default function Plan() {
  return (
    <section className={styles.plan}>
      <Container>
        <span className={styles.en}>PLANS</span>
        <h2>Jam Factoryの料金プラン</h2>

        <p className={styles.overview}>
          ホームページの機能や規模に合わせて、
          <br className={styles.brSp} />
          3つのプランからお選びいただけます。
        </p>

        <PlanOverview />

        <div className={styles.bottom}>
          <span className={styles.plus}></span>

          <p className={styles.botText}>
            無料・有料含め多くの追加オプションを用意しております！
            <br />
            詳しくは料金プランページからご確認ください。
          </p>

          <div className={styles.linkWrap}>
            <Btn href="/plan" theme="main" icon="arrow">
              料金プランを見る
            </Btn>
          </div>
        </div>
      </Container>
    </section>
  );
}
