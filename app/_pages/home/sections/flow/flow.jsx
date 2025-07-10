import SectionTitle from "@/app/_components/common/section-title/section-title";
import Container from "@/app/_components/common/container/container";
import Btn from "@/app/_components/common/btn/btn";

import styles from "./flow.module.scss";

export default function Flow() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle enTitle="Flow" jpTitle="制作の流れ" />

        <ol className={styles.list}>
          <li className={styles.item}>
            <div className={styles.head}>
              <span>STEP</span>
              <span>01</span>
            </div>
            <div className={styles.body}>
              <h3>お問い合わせ</h3>
              <div className={styles.bodyContent}>
                <p>
                  お問い合わせは24時間受け付けておりますので、お問い合わせフォームもしくはLINEよりご連絡をお願いいたします。「とりあえず相談したい」「まずは話を聞いてみたい」という場合でも対応可能ですので、お気軽にご連絡ください。
                </p>
                <div className={styles.btns}>
                  <div className={styles.btn}>
                    <Btn href="/" theme="main" icon="arrow">
                      お問い合わせ
                    </Btn>
                  </div>
                  <div className={styles.btn}>                    
                    <Btn href="https://lin.ee/zl3F3r6" theme="line" icon="arrow">
                      相談する
                    </Btn>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.head}>
              <span>STEP</span>
              <span>02</span>
            </div>
            <div className={styles.body}>
              <h3>サービスのご説明 & 無料相談</h3>
              <div className={styles.bodyContent}>
                <p>
                  サービス内容のご説明と、お客様のご要望に最適なプランをご提案いたします。ホームページに関する知識がない方でも理解できるよう丁寧にご説明＆提案いたしますので、ご安心ください。
                  <br />
                  ※この時点では料金は発生しません。
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.head}>
              <span>STEP</span>
              <span>03</span>
            </div>
            <div className={styles.body}>
              <h3>ご契約</h3>
              <div className={styles.bodyContent}>
                <p>
                  料金プランやサービスの内容に納得いただけましたら、ご契約となります。
                  <br />
                  メールにて電子契約書を送付いたしますので、契約手続きをお願いいたします。
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.head}>
              <span>STEP</span>
              <span>04</span>
            </div>
            <div className={styles.body}>
              <h3>ヒアリング</h3>
              <div className={styles.bodyContent}>
                <p>
                  オンライン通話で、お客様のご要望をヒアリングさせていただきます。
                  <br />
                  ホームページの雰囲気や色合い、表示するコンテンツなどを相談しながら内容を固めていきます。
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.head}>
              <span>STEP</span>
              <span>05</span>
            </div>
            <div className={styles.body}>
              <h3>ホームページ制作開始</h3>
              <div className={styles.bodyContent}>
                <p>
                  ホームページの制作をスタートします。
                  <br />
                  プランやオプションにもよりますが、最短5営業日で公開可能です。
                </p>
              </div>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.head}>
              <span>STEP</span>
              <span>06</span>
            </div>
            <div className={styles.body}>
              <h3>ホームページ公開</h3>
              <div className={styles.bodyContent}>
                <p>
                  制作したホームページに納得いただけましたら、本番サーバーに移行して公開となります。
                  <br />
                  ホームページ公開後は、チャットサポートや修正対応などのアフターサポートを行います。
                </p>
              </div>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
