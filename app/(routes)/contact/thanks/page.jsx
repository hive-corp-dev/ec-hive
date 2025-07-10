import styles from "./thanks-page.module.scss";
import Container from "@/app/_components/common/container/container";
import Btn from "@/app/_components/common/btn/btn";
import { THANKS_METADATA } from "@/app/_data/metadata";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { MAIL_ADDRESS } from "@/app/_data/data";

export const metadata = outputMetadata(THANKS_METADATA.title, THANKS_METADATA.description, THANKS_METADATA.slug, {
  robots: {
    index: false,
  },
});

export default function ThanksPage() {
  return (
    <main className={styles.main}>
      <div className={styles.mv}>
        <Container>
          <span className={styles.en}>THANK YOU</span>
          <h1>お問い合わせ完了</h1>
        </Container>
      </div>

      <div className={styles.body}>
        <Container>
          <div className={styles.content}>
            <h2 className={styles.title}>お問い合わせありがとうございます。</h2>

            <div className={styles.text}>
              <p>
                2営業日以内に担当者からご連絡させていただきますので、しばらくお待ちくださいませ。
                <br />
                万が一返信メールが届かない場合や担当者からの連絡が無い場合は、お手数ですが
                <br />
                <a href={`mailto:${MAIL_ADDRESS}`}>{MAIL_ADDRESS}</a>
                <br />
                に直接ご連絡ください。
              </p>
            </div>

            <div className={styles.btn}>
              <Btn href="/" icon="arrow">
                TOPページに戻る
              </Btn>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
