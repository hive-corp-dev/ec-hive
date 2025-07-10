import { NOT_FOUND_METADATA } from "./_data/metadata";
import { outputMetadata } from "./_utils/outputMetadata";
import Container from "./_components/common/container/container";
import styles from "./not-found.module.scss";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

export async function generateMetadata() {
  return outputMetadata(NOT_FOUND_METADATA.title, NOT_FOUND_METADATA.description, null, {
    robots: {
      index: false,
    },
  });
}

export default function NotFoundPage() {
  return (
    <main className={styles.main}>
      <div className={styles.mv}>
        <Container>
          <span className={styles.en}>404 NOT FOUND</span>
          <h1>お探しのページが見つかりません</h1>
          <p className={styles.text}>
            申し訳ございません。お客様がアクセスしようとしたページが見つかりませんでした。
            <br />
            ページが移動または削除されたか、URLの入力間違いの可能性があります。
            <br />
            正しいURLをご入力いただくか、メニューからご覧になりたい情報をお探しください。
          </p>

          <div className={styles.btnWrap}>
            <Link href="/" className={styles.btn}>
              <span>TOPに戻る</span>
              <IoArrowForward />
            </Link>
          </div>
        </Container>
      </div>
    </main>
  );
}
