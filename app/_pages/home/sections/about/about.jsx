import Container from "@/app/_components/common/container/container";
import styles from "./about.module.scss";
import Btn from "@/app/_components/common/btn/btn";

export default function About() {
  return (
    <section className={styles.about}>
      <Container className={styles.container}>
        <h2>Jam Factoryのホームページ制作</h2>

        <div className={styles.text}>
          <p>Jam Factoryは、月額6,980円から格安サイトを制作・保守運用するサービスです。</p>
          <p>サーバー代・ドメイン代・初期費用は無料で、クオリティの高いホームページを作成いたします。</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <strong>名刺代わりのサイト</strong>が欲しい
          </li>
          <li className={styles.item}>
            <strong>最低限の費用</strong>で小さく始めたい
          </li>
          <li className={styles.item}>
            <strong>お知らせや記事の更新</strong>もしたい
          </li>
          <li className={styles.item}>
            <strong>運用やメンテナンス</strong>も任せたい
          </li>
          <li className={styles.item}>
            <strong>レスポンシブ対応</strong>のサイトが欲しい
          </li>
          <li className={styles.item}>
            <strong>サイト表示速度</strong>や<strong>品質</strong>
            にもこだわりたい
          </li>
        </ul>

        <div className={styles.bottomText}>
          <p>こんな方は、ぜひジャムファクトリーにご相談ください！</p>
          <p>格安で高パフォーマンスなホームページを制作いたします。</p>
        </div>

        <div className={styles.btnWrap}>
          <Btn href="/" theme="main-reverse" icon="mail">
            まずは相談してみる
          </Btn>
        </div>
      </Container>
    </section>
  );
}
