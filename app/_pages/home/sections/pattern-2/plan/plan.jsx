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

        <div className={styles.planCols}>
          <div className={styles.infoCol}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>制作期間</li>
              <li className={styles.infoItem}>制作ページ</li>
              <li className={styles.infoItem}>商品登録</li>
              <li className={styles.infoItem}>デザイン</li>
              <li className={styles.infoItem}>多言語化対応</li>
              <li className={styles.infoItem}>追加機能</li>
            </ul>
          </div>
          <div className={`${styles.planCol} ${styles.isStandard}`}>
            <ul className={styles.planList}>
              <li className={`${styles.planItem} ${styles.isHead}`}>
                <p className={styles.planIntro}>充実した機能を備えた</p>
                <div className={styles.planHeadMain}>
                  <h3 className={styles.planTitle}>標準プラン</h3>
                  <span className={styles.planPrice}>
                    <span className={styles.price}>
                      <span>¥</span>298,000
                      <span>〜</span>
                    </span>
                  </span>
                </div>
              </li>
              <li className={styles.planItem}>2週間〜4週間</li>
              <li className={styles.planItem}>
                <ul className={styles.planCheckList}>
                  <li>必須ページ</li>
                  <li>よくあるご質問</li>
                  <li>会社概要</li>
                  <li>お知らせ一覧・詳細</li>
                  <li>お問い合わせ</li>
                </ul>
              </li>
              <li className={styles.planItem}>無制限</li>
              <li className={styles.planItem}>
                既存テーマのカスタマイズ
                <br />
                <small>（コーディング対応可）</small>
              </li>
              <li className={styles.planItem}>3言語まで対応可能</li>
              <li className={styles.planItem}>
                <ul className={styles.planCheckList}>
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
              </li>
            </ul>
          </div>
          <div className={`${styles.planCol} ${styles.isCustom}`}>
            <ul className={styles.planList}>
              <li className={`${styles.planItem} ${styles.isHead}`}>
                <p className={styles.planIntro}>デザインからフルカスタマイズ</p>
                <div className={styles.planHeadMain}>
                  <h3 className={styles.planTitle}>オーダーメイドプラン</h3>
                  <span className={styles.planPrice}>
                    <span className={styles.negotiable}>要相談</span>
                  </span>
                </div>
              </li>
              <li className={styles.planItem}>1ヶ月〜</li>
              <li className={styles.planItem}>
                <ul className={styles.planCheckList}>
                  <li>必須ページ</li>
                  <li>よくあるご質問</li>
                  <li>会社概要</li>
                  <li>お知らせ一覧・詳細</li>
                  <li>お問い合わせ</li>
                  <ul className={styles.planPlusList}>
                    <li>ページの追加無制限</li>
                  </ul>
                </ul>
              </li>
              <li className={styles.planItem}>無制限</li>
              <li className={styles.planItem}>オーダーメイド</li>
              <li className={styles.planItem}>無制限</li>
              <li className={styles.planItem}>
                <ul className={styles.planCheckList}>
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
                <ul className={styles.planPlusList}>
                  <li>必要な機能を実装可能</li>
                  <li>独自のカスタムアプリ開発も可能</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

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
