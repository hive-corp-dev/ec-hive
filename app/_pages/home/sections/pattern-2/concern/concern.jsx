import Container from "@/app/_components/common/container/container";
import styles from "./concern.module.scss";
import Btn from "@/app/_components/common/btn/btn";
import Link from "next/link";
import { LINE_URL_TOP_CONCERN } from "@/app/_data/url";
import icon from "/public/images/common/concern.svg";
import Image from "next/image";

export default function Concern() {
  return (
    <section className={styles.concern}>
      <Container>
        <span className={styles.en}>CONCERNS</span>
        <h2>こんなお悩みありませんか？</h2>

        <ul>
          <li>
            <p>名刺代わりのサイトが欲しい・・・</p>
          </li>
          <li>
            <p>自分でサイトを作ってみたけど、うまくいかない・・・</p>
          </li>
          <li>
            <p>ホームページの制作をお願いしたいが、初期費用を抑えたい・・・</p>
          </li>
          <li>
            <p>ビジネスを始めたばかりなので、まずは小さく始めたい・・・</p>
          </li>
          <li>
            <p>サイトの表示速度やセキュリティにもこだわりたい・・・</p>
          </li>
          <li>
            <p>バージョン管理やドメイン取得など、難しい・・・</p>
          </li>
        </ul>

        <div className={styles.box}>
          <div className={styles.boxInner}>
            <p className={styles.acc}>
              そのお悩み、
              <br className={styles.brSp} />
              私たちが解決します！
            </p>
            <div className={styles.boxImg}>
              <Image src={icon} alt="" />
            </div>
            <p className={styles.accSub}>
              ジャムファクトリーは、<span>サブスクリプション型</span>のホームページ制作サービスです。
              <br />
              <span>初期費用・制作費用・解約費用は一切かかりません。</span>
              <br />
              費用を抑えつつホームページを運用したい方は、ぜひご相談ください。
            </p>
            {/* <p className={styles.text}>
              ビジネスを始めたての方、ホームページについてよくわからない方のために、
              <br />
              親身になってサポートします。
              <br />
              事前知識は一切必要ありませんので、お気軽にご相談ください。
            </p> */}
            <div className={styles.btns}>
              <Btn href="/contact" icon="arrow">
                お問い合わせ
              </Btn>
              <Btn href={LINE_URL_TOP_CONCERN} icon="line" theme="secondary" isExternal>
                LINEで相談
              </Btn>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
