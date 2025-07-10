import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import Container from "@/app/_components/common/container/container";
import styles from "./commercial-law-page.module.scss";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { COMMERCIAL_METADATA } from "@/app/_data/metadata";
import { MAIL_ADDRESS } from "@/app/_data/data";

export const metadata = outputMetadata(
  COMMERCIAL_METADATA.title,
  COMMERCIAL_METADATA.description,
  COMMERCIAL_METADATA.slug
);

export default function CommercialLawPage() {
  return (
    <main className={styles.main}>
      <SubMv
        jpTitle={
          <>
            特定商取引法に
            <br className={styles.brSp} />
            基づく表記
          </>
        }
        enTitle="COMMERCIAL LAW"
        breadcrumbPaths={[{ name: "特定商取引法に基づく表記" }]}
      />

      <div className={styles.body}>
        <Container>
          <div className={styles.bodyContent}>
            <div className={styles.contentInner}>
              <dl className={styles.list}>
                <div className={styles.item}>
                  <dt>販売業社の名称</dt>
                  <dd>赤尾 起弥</dd>
                </div>

                <div className={styles.item}>
                  <dt>所在地</dt>
                  <dd>
                    〒530-0001
                    <br />
                    大阪府大阪市北区梅田1-1-3大阪駅前第3ビル 29階 1-1-1号室
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>電話番号</dt>
                  <dd>
                    電話番号については、お問い合わせ先メールアドレスにてご請求をいただければ、遅滞なく開示いたします。
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>メールアドレス</dt>
                  <dd>{MAIL_ADDRESS}</dd>
                </div>
                <div className={styles.item}>
                  <dt>運営統括責任者</dt>
                  <dd>赤尾 起弥</dd>
                </div>
                <div className={styles.item}>
                  <dt>ホームページURL</dt>
                  <dd>https://jam-factory.tech</dd>
                </div>
                <div className={styles.item}>
                  <dt>サービスの内容</dt>
                  <dd>各サービス詳細ページをご参照ください。</dd>
                </div>
                <div className={styles.item}>
                  <dt>サービスの期間</dt>
                  <dd>当サイトに定められたサブスクリプション料金をお支払い頂いている期間</dd>
                </div>
                <div className={styles.item}>
                  <dt>追加手数料等の追加料金</dt>
                  <dd>
                    <ul>
                      <li>消費税（10%）</li>
                      <li>Stripe決済手数料</li>
                      <li>当サイトのページ、コンテンツの閲覧、ダウンロード等に関するインターネット接続料金</li>
                      <li>通信料金</li>
                    </ul>
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>交換および返品（返金ポリシー）</dt>
                  <dd>サービスの性質上、ご購入後のキャンセル・返金はできかねます。</dd>
                </div>
                <div className={styles.item}>
                  <dt>引渡時期</dt>
                  <dd>当方で決済処理確認後即時提供致します。</dd>
                </div>
                <div className={styles.item}>
                  <dt>受付可能な決済手段</dt>
                  <dd>クレジットカードまたは国内の銀行振込</dd>
                </div>
                <div className={styles.item}>
                  <dt>決済期間</dt>
                  <dd>
                    クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から3日以内にお振り込みいただく必要があります。
                  </dd>
                </div>
                <div className={styles.item}>
                  <dt>販売価格</dt>
                  <dd>各サービス詳細ページをご参照ください。</dd>
                </div>
                <div className={styles.item}>
                  <dt>中途解約について</dt>
                  <dd>
                    <ol>
                      <li>当方に申し出て解約手続きをしてください。</li>
                      <li>途中解約した場合であっても、返金はできかねます。</li>
                    </ol>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
