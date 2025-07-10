import Container from "@/app/_components/common/container/container";
import iconPoint01 from "/public/images/common/icon-point-01.svg";
import iconPointSupport from "/public/images/common/icon-point-support.svg";
import iconPointDesign from "/public/images/common/icon-point-design.svg";
import iconPointCost from "/public/images/common/icon-point-cost.svg";
import iconPointJamstack from "/public/images/common/icon-point-jamstack.svg";
import iconPointTask from "/public/images/common/icon-point-task.svg";
import styles from "./point.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Point() {
  return (
    <section className={styles.point} id="point">
      <Container>
        <span className={styles.en}>OUR FEATURES</span>
        <h2>
          Jam Factoryが選ばれる
          <br />
          5つのポイント
        </h2>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointTask} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 01.</span>
              <h3>面倒なことはまるっとお任せ！</h3>
              <p>
                ホームページを始めるとなると、デザインから実装、サーバーやドメインの契約、セキュリティ対策など、多くの複雑な手順が必要となります。ジャムファクトリーでは、そういった面倒な作業は全て私たちが対応します！お客様がホームページに割く時間を最小限に抑え、事業の成長に専念できるようサポートしますので、安心してお任せください。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointCost} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 02.</span>
              <h3>初期費用を大幅に削減可能！</h3>
              <p>
                多くのホームページ制作会社は高額で、特に出費が多くなる事業の立ち上げ時期には初期費用が大きな負担となることが多いです。当サービスでは、初期費用、制作費、サーバーやドメイン維持費などはサブスクの料金に含まれているため、初期費用を大幅に抑えることが可能です！ホームページをスモールスタートすることで、節約できた費用は事業の成長のためにお使いいただけます。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointDesign} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 03.</span>
              <h3>オリジナルデザインを作成！</h3>
              <p>
                当サービス独自のデザインシステムをベースに、お客様とのヒアリング内容を取り入れたオリジナルデザインを制作いたします。デザインの王道パターンを取り入れた100種類以上のパーツを組み合わせて制作しますので、高い操作性・デザイン性を保つことが可能です。さらにお客様とのヒアリングでいただいた情報をもとに、ホームページの雰囲気や色味などを調整することで、高いユーザービリティを保ったままオリジナリティを出すことができます。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointSupport} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 04.</span>
              <h3>ホームページ公開後もサポートします！</h3>
              <p>
                ホームページは公開しただけで終わりではありません。ホームページの運用や更新、セキュリティ対策やバージョン管理など、公開後も様々な作業が必要となります。ジャムファクトリーでは、ホームページ公開後もサポートを行い、お客様の事業の成長をお手伝いします！月々の修正対応やチャットサポートはもちろんのこと、追加オプションをご利用いただくことでホームページを拡張することも可能です。運用に関するお悩みやご要望がございましたら、お気軽にご相談ください。
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.thumb}>
              <Image src={iconPointJamstack} alt="" />
            </div>
            <div className={styles.text}>
              <span>POINT 05.</span>
              <h3>最新技術で高セキュリティ・高パフォーマンスを実現</h3>
              <p>
                ジャムファクトリーでは、Jamstack（ジャムスタック）と呼ばれる最先端の技術を使用してホームページを制作します。高いセキュリティ性、ページ表示速度の向上、開発効率の良さといったメリットがあり、セキュリティ面、パフォーマンス面でも優れたホームページを提供することができます。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bannerWrap}>
          <Link className={styles.banner} href="/monitor-campaign">
            <Image src="/images/common/banner-sp.svg" width={360} height={148} alt="モニターキャンペーン実施中！" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
