import Container from "@/app/_components/common/container/container";
import Link from "next/link";
import styles from "./flow.module.scss";
import { LINE_URL_TOP_FLOW } from "@/app/_data/url";

export default function Flow2() {
  return (
    <section className={styles.flow} id="flow">
      <Container>
        <span className={styles.en}>FLOW</span>
        <h2>制作の流れ</h2>

        <ol className={styles.list}>
          <li className={styles.item}>
            <span className={styles.count}>01</span>
            <div className={styles.itemContent}>
              <h3>お問い合わせ</h3>
              <div className={styles.itemText}>
                <p>
                  お問い合わせは24時間受け付けておりますので、<Link href="/contact">お問い合わせフォーム</Link>
                  よりご連絡をお願いいたします。
                  <br />
                  「とりあえず相談したい」「まずは話を聞いてみたい」という方も大歓迎です。お気軽にご相談ください。
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>02</span>
            <div className={styles.itemContent}>
              <h3>サービスのご説明 & 無料相談</h3>
              <div className={styles.itemText}>
                <p>
                  サービス内容のご説明と簡単なヒアリングを行いお客様のご要望に最適なプランをご提案いたします。
                  <br />
                  ECサイトを構築するのが初めてという方にも専門用語などをできるだけ噛み砕きながら丁寧にご説明＆提案いたしますので、ご安心ください。
                  <br />
                  <small>※この時点では料金は発生しません。</small>
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>03</span>
            <div className={styles.itemContent}>
              <h3>ご契約</h3>
              <div className={styles.itemText}>
                <p>
                  料金プランやサービスの内容に納得いただけましたら、ご契約となります。
                  <br />
                  メールにて電子契約書を送付いたしますので、契約手続きをお願いいたします。
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>04</span>
            <div className={styles.itemContent}>
              <h3>お打ち合わせ・ヒアリング</h3>
              <div className={styles.itemText}>
                <p>
                  オンライン通話で、お客様のご要望を細かくヒアリングさせていただきます。
                  <br />
                  ECサイトに必要な機能や情報などを決めていきます。
                  <br />
                  弊社やお客様が一度持ち帰って検討する項目などがあれば検討後、再度打ち合わせを行います。
                  <br />
                  <small>※最大3回まで打ち合わせを行います。</small>
                </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>05</span>
            <div className={styles.itemContent}>
              <h3>制作開始</h3>
              <div className={styles.itemText}>
                <p>
                  弊社とお客様でECサイトの機能要件が合意後、ECサイトの構築を開始します。
                  <br />
                  ECサイトの規模や機能によって制作期間が異なりますが、シンプルな仕様であれば5営業日程度で構築可能です。
                </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>06</span>
            <div className={styles.itemContent}>
              <h3>ご確認</h3>
              <div className={styles.itemText}>
                <p>
                  制作完了後、お客様にECサイトの確認を行っていただきます。
                  <br />
                  誤字脱字、機能の不具合などがあれば修正を行います。
                </p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>07</span>
            <div className={styles.itemContent}>
              <h3>サイトの公開</h3>
              <div className={styles.itemText}>
                <p>
                  ご確認完了後、本番サーバーに移行して公開となります。
                  <br />
                  公開後は、チャットサポートや修正対応などのアフターサポートを行います。
                </p>
              </div>
            </div>
          </li>
        </ol>

        <div className={styles.start}>
          <span className={styles.startCount}>START</span>
          <div className={styles.startContent}>
            <h3>運用開始</h3>
            <div className={styles.itemText}>
              <p>
                ECサイトは公開してからが本当のスタートです。開店後の運用を工夫することで、売上向上へとつながります。ECHiveでは、必要に応じてサイトの保守や、WEBの専門家としての運営サポート・アドバイスも承っています。お気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
