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
            <p>ECサイトを作りたいけれど、どこに頼めばいいかわからない・・・</p>
          </li>
          <li>
            <p>自分でECサイトを作り始めたけれど、うまくいかない・・・</p>
          </li>
          <li>
            <p>他社に見積もりを出してもらったけれど、予算を超えている・・・</p>
          </li>
          <li>
            <p>ビジネスを始めたばかりなので、まずは小さく始めたい・・・</p>
          </li>
          <li>
            <p>とにかく早くECサイトを作りたい・・・</p>
          </li>
          <li>
            <p>ECを作りたいけれど、すべてまかせたい・・・</p>
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
            {/* <p className={styles.accSub}>
              EC HIVEは、Shopifyを使用したECサイトの構築・運用サポートをします。
              <br />
              長年ウェブサイトやシステムを構築してきた経験を活かし、
              <br />
              <span>低単価で素早いECサイトの構築</span>から、<br /><span>フルカスタマイズのECサイト</span>まで構築を承ります。
              <br />
              ECサイトの構築・運用についてのお悩みがございましたら、ぜひご相談ください。
            </p> */}
            <p className={styles.accSub}>
              EC HIVEは、長年ウェブサイトやシステムを構築してきた経験を活かし
              <br />
              <span>ECサイトの構築・運用サポート</span>を行います。
              <br />
              <span>低単価かつ短納期のECサイトの構築</span>から、<br /><span>フルカスタマイズのECサイト構築</span>まで承ります。
              <br />
              ECサイトの構築・運用についてのお悩みがございましたら、
              <br />              
              ぜひEC HIVEへご相談ください。
            </p>
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
