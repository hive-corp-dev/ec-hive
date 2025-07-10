import Container from "@/app/_components/common/container/container";
import SectionTitle from "@/app/_components/common/section-title/section-title";
import styles from "./feature.module.scss";

export default function Feature() {
  return (
    <div className={styles.feature}>
      <Container>
        <SectionTitle enTitle="Our Featuers" jpTitle="Jam Factoryの特徴" />

        <ul className={styles.cards}>
          <li className={styles.card}>
            <span>Feature</span>
            <h3>
              お客様自身でお知らせや
              <br />
              ブログの更新が可能
            </h3>
            <div className={styles.cardText}>
              <p>
                お客様自身で記事を更新できるよう構築いたします。記事の投稿には日本語対応のCMSを使用するので、簡単かつ直感的に執筆することができます。
              </p>
            </div>
          </li>
          <li className={styles.card}>
            <span>Feature</span>
            <h3>
              バージョン管理は
              <br />
              全てこちらで対応
            </h3>
            <div className={styles.cardText}>
              <p>
                コンテンツ管理システム（CMS）のバージョン管理や、それに応じたフロント側の管理は全て私たちが対応します。バージョンアップによるバグや表示崩れの心配はありません。
              </p>
            </div>
          </li>
          <li className={styles.card}>
            <span>Feature</span>
            <h3>
              サイトに合わせて
              <br />
              オリジナルのデザインを制作
            </h3>
            <div className={styles.cardText}>
              <p>
                テンプレート等は使用せず、オリジナルのデザインを制作いたします。ヒアリング時にサイトのテーマや雰囲気などをお聞きして、最適なデザインを制作します。
              </p>
            </div>
          </li>
          <li className={styles.card}>
            <span>Feature</span>
            <h3>
              検索エンジン最適化は
              <br />
              標準で対応
            </h3>
            <div className={styles.cardText}>
              <p>
                ホームページを検索上位に表示するためのSEO対策を行います。さらにサーチコンソールを利用し、ホームページを検索エンジンにインデックスするまでサポートします。
              </p>
            </div>
          </li>
          <li className={styles.card}>
            <span>Feature</span>
            <h3>
              充実した公開後の
              <br />
              保守運用サポート
            </h3>
            <div className={styles.cardText}>
              <p>ホームページは公開しただけでは効果を得られません。公開後の保守運用のサポートも手厚く行います。</p>
            </div>
          </li>
          <li className={styles.card}>
            <span>Feature</span>
            <h3>
              高セキュリティ・高速表示・
              <br />
              高性能なサイトを制作
            </h3>
            <div className={styles.cardText}>
              <p>
                ホームページの制作には、最先端の技術構成であるJamstackを使用します。堅牢なセキュリティ・高速表示・高パフォーマンスが特徴となっています。
              </p>
            </div>
          </li>
        </ul>

        {/* <h3>
            1. <span>高</span>速表示！
          </h3>
          <p>
            Jam
            Factoryでは、Jamstackサイトの制作を承っております。Jamstackの最大の特徴として、サイト表示スピードの高速化を見込めます。
          </p>

          <h3>
            2. <span>高</span>セキュリティ！
          </h3>
          <p>
            Jamstackでは、コンテンツを管理する部分（バックエンド）と、コンテンツを表示する部分（フロントエンド）が分離しているという特徴があります。表示されているコンテンツは静的なデータなので、サーバーやCMSの管理画面等野情報が一切なく、強固なセキュリティで安心してサイトを運営することができます。
          </p>

          <h3>
            3. <span>高</span>パフォーマンス！
          </h3>
          <p>
            Jam
            Factoryでは、Jamstackサイトの制作を承っております。Jamstackの最大の特徴として、サイト表示スピードの高速化を見込めます。
          </p> */}
      </Container>
    </div>
  );
}
