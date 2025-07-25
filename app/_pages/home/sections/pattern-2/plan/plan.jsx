import Container from "@/app/_components/common/container/container";
import styles from "./plan.module.scss";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import PlanOverview from "@/app/_components/plan/plan-overview/plan-overview";
import Btn from "@/app/_components/common/btn/btn";
import Image from "next/image";

export default function Plan() {
  return (
    <section className={styles.plan}>
      <Container>
        <span className={styles.en}>PLANS</span>
        <h2>料金プラン</h2>

        <p className={styles.overview}>
          ホームページの機能や規模に合わせて、
          <br className={styles.brSp} />
          2つのプランからお選びいただけます。
        </p>

        <table className={styles.table}>
          <tbody>
            <tr>
              <td></td>
              <td>標準プラン</td>
              <td>オーダーメイドプラン</td>
            </tr>
            <tr>
              <td>価格</td>
              <td>298,000円〜</td>
              <td>要相談</td>
            </tr>
            <tr>
              <td>制作期間</td>
              <td>2週間〜4週間</td>
              <td>1ヶ月〜</td>
            </tr>
            <tr>
              <td>制作ページ</td>
              <td>
                <ul>
                  <li>必須ページ</li>
                  <li>よくあるご質問</li>
                  <li>会社概要</li>
                  <li>お知らせ一覧・詳細</li>
                  <li>お問い合わせ</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>必須ページ</li>
                  <li>よくあるご質問</li>
                  <li>会社概要</li>
                  <li>お知らせ一覧・詳細</li>
                  <li>お問い合わせ</li>
                </ul>
                <span className={styles.subText}>+ ページの追加無制限</span>
              </td>
            </tr>
            <tr>
              <td>商品登録</td>
              <td>無制限</td>
              <td>無制限</td>
            </tr>
            <tr>
              <td>デザイン</td>
              <td>
                既存テーマのカスタマイズ
                <br />
                <small>（コーディング対応可）</small>
              </td>
              <td>オーダーメイド</td>
            </tr>
            <tr>
              <td>多言語化対応</td>
              <td>3言語まで対応可能</td>
              <td>無制限</td>
            </tr>
            <tr>
              <td>追加機能</td>
              <td>
                <ul>
                  <li>
                    サイト解析ツール
                    <br />
                    <small>（Googleアナリティクス、サーチコンソール、Clarity等）</small>
                  </li>
                  <li>お問い合わせフォーム</li>
                  <li>ブログ機能</li>
                  <li>SNS埋め込み</li>
                  <li>カスタマーレビュー</li>
                  <li>ソーシャルログイン</li>
                </ul>
              </td>
              <td>
                必要な機能を実装可能
                <br />
                独自のカスタムアプリ開発も可能
              </td>
            </tr>
          </tbody>
        </table>

        <div className={styles.bottom}>
          <span className={styles.plus}></span>

          <h3 className={styles.optionsTitle}>利用可能なオプション</h3>

          <ul className={styles.optionsList}>
            <li>独自ドメイン取得</li>
            <li>商品登録（無制限）</li>
            <li>決済方法設定</li>
            <li>送料 / 手数料設定</li>
            <li>メールマガジン</li>
            <li>SNS連携</li>
            <li>ポイント機能</li>
            <li>ウィッシュリスト（お気に入り）</li>
            <li>ポップアップバナー表示</li>
            <li>カスタマーレビュー</li>
            <li>予約販売</li>
            <li>チャットbot設置</li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
