import Container from "@/app/_components/common/container/container";
import iconPoint01 from "/public/images/common/icon-point-01.svg";
import iconPointSupport from "/public/images/common/icon-point-support.svg";
import iconPointDesign from "/public/images/common/icon-point-design.svg";
import iconPointCheap from "/public/images/common/icon-point-cheap.svg";
import iconPointCustomize from "/public/images/common/icon-point-customize.svg";
import iconPointTask from "/public/images/common/icon-point-task.svg";
import styles from "./point.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Point() {
  return (
    <section className={styles.point} id="point">
      <Container>
        <span className={styles.en}>OUR FEATURES</span>
        <h2>ECHiveの5つの特徴</h2>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointTask} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 01.</span>
              <h3>豊富な実務経験と高い技術力</h3>
              <p>
                EC HIVEのメンバーは長年にわたってウェブサイトやシステムを構築してきたメンバー3名で運営しています。
                <br />
                これまでの経験を活かし、高い品質でECサイトを構築やカスタマイズサービスを提供します。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointCheap} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 02.</span>
              <h3>低単価かつ短納期でのECサイト構築</h3>
              <p>
                テンプレートを使用したECサイト構築であれば低単価かつ短納期での構築が可能です。
                <br />
                事業立ち上げでできるだけ早くECサイトを公開したいというお客様のご要望にもお応えします。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointCustomize} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 03.</span>
              <h3>必要に応じたカスタマイズサービス</h3>
              <p>
                ECサイトはお客様のビジネスの特性や規模によって必要とされる要件がお客様ごとに大きく異なります。
                <br />
                EC
                HIVEでは、しっかりとヒアリングを行い、ただテンプレートをそのまま使用するのでなくお客様のビジネスの特性や規模に合わせたカスタマイズを行っております。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointDesign} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 04.</span>
              <h3>オリジナルデザインのECも作成可能</h3>
              <p>
                商品のブランディングであったり、競合他社や他ブランドと差別化を図る目的でしっかりとデザインをしたECサイトを構築したいというお客様のご要望にもお応えします。
                <br />
                ユーザーが使いやすく、商品の魅力を伝えやすいデザインを制作し構築まで行います。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointSupport} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 05.</span>
              <h3>公開後のサポートも承ります</h3>
              <p>
                ECサイトは公開しただけで終わりではありません。商品ラインナップの更新や機能の拡張、セキュリティ対策など、公開後も様々な作業が必要となります。
                <br />
                EC HIVEでは、公開後もお客様のサポートを行うプランをご用意しています。
                <br />
                ECサイトの運用サポートを通じてお客様の事業の成長をお手伝いします。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
