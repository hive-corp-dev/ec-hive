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
            <span className={styles.count}>STEP 01.</span>
            <h3>お問い合わせ</h3>
            <div>
              <p>
                お問い合わせは24時間受け付けておりますので、<Link href="/contact">お問い合わせフォーム</Link>よりご連絡をお願いいたします。
                <br />
                「とりあえず相談したい」「まずは話を聞いてみたい」という方も大歓迎です。
                <br />
                お気軽にご相談ください。
              </p>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>STEP 02.</span>
            <h3>サービスのご説明 & 無料相談</h3>
            <div>
              <p>
                サービス内容のご説明と簡単なヒヤリングを行いお客様のご要望に最適なプランをご提案いたします。
                <br />
                ECサイトを構築するのが初めてという方にも専門用語などをできるだけ噛み砕きながら丁寧にご説明＆提案いたしますので、ご安心ください。
                <br />
                <small>※この時点では料金は発生しません。</small>
              </p>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>STEP 03.</span>
            <h3>ご契約</h3>
            <div>
              <p>
                料金プランやサービスの内容に納得いただけましたら、ご契約となります。
                <br />
                メールにて電子契約書を送付いたしますので、契約手続きをお願いいたします。
              </p>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>STEP 04.</span>
            <h3>お打ち合わせ・ヒアリング</h3>
            <div>
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
          </li>
          <li className={styles.item}>
            <span className={styles.count}>STEP 05.</span>
            <h3>制作開始</h3>
            <div>
              <p>
                弊社とお客様でECサイトの機能要件が合意後、ECサイトの構築を開始します。
                <br />
                ECサイトの規模や機能によって制作期間が異なりますが、シンプルな仕様であれば5営業日程度で構築可能です。                
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>STEP 06.</span>
            <h3>ご確認</h3>
            <div>
              <p>
                制作完了後、お客様にECサイトの確認を行っていただきます。
                <br />
                誤字脱字、機能の不具合などがあれば修正を行います。
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>STEP 06.</span>
            <h3>公開</h3>
            <div>
              <p>
                ご確認完了後、本番サーバーに移行して公開となります。
                <br />
                公開後は、チャットサポートや修正対応などのアフターサポートを行います。
              </p>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
