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
                お問い合わせは24時間受け付けておりますので、<Link href="/contact">お問い合わせフォーム</Link>
                もしくは
                <a href={LINE_URL_TOP_FLOW} target="_blank">
                  LINE
                </a>
                よりご連絡をお願いいたします。
                <br />
                「とりあえず相談したい」「まずは話を聞いてみたい」という場合でも対応可能ですので、お気軽にご連絡ください。
              </p>
            </div>
          </li>

          <li className={styles.item}>
            <span className={styles.count}>STEP 02.</span>
            <h3>サービスのご説明 & 無料相談</h3>
            <div>
              <p>
                サービス内容のご説明と、お客様のご要望に最適なプランをご提案いたします。ホームページに関する知識がない方でも理解できるよう丁寧にご説明＆提案いたしますので、ご安心ください。
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
            <h3>ヒアリング</h3>
            <div>
              <p>
                オンライン通話で、お客様のご要望をヒアリングさせていただきます。
                <br />
                ホームページの雰囲気や色合い、表示するコンテンツなどを相談しながら内容を固めていきます。
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>STEP 05.</span>
            <h3>ホームページ制作開始</h3>
            <div>
              <p>
                ホームページの制作をスタートします。
                <br />
                プランやオプションにもよりますが、最短5営業日で公開可能です。
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <span className={styles.count}>STEP 06.</span>
            <h3>ホームページ公開</h3>
            <div>
              <p>
                制作したホームページに納得いただけましたら、本番サーバーに移行して公開となります。
                <br />
                ホームページ公開後は、チャットサポートや修正対応などのアフターサポートを行います。
              </p>
            </div>
          </li>
        </ol>
      </Container>
    </section>
  );
}
