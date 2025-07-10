"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { PLAN_DATA } from "@/app/_data/plan";

import styles from "./plan-overview.module.scss";

export default function PlanOverview() {
  const [activeTab, setActiveTab] = useState("yearly");

  const planMinimalData = PLAN_DATA.find((plan) => plan.planId === "minimal");
  const planBasicData = PLAN_DATA.find((plan) => plan.planId === "basic");
  const planCmsData = PLAN_DATA.find((plan) => plan.planId === "cms");

  return (
    <>
      <div className={styles.toggle}>
        <div className={`${styles.toggleBtns} ${activeTab === "yearly" ? styles.isYearly : styles.isMonthly}`}>
          <div className={styles.toggleCol}>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`${styles.toggleBtn} ${activeTab === "monthly" && styles.isActive}`}
            >
              月払い
            </button>
          </div>
          <div className={styles.toggleCol}>
            <span className={styles.toggleColDiscount}>
              {/* ＼1ヶ月分お得／ */}
              ＼キャンペーン実施中！／
            </span>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`${styles.toggleBtn} ${activeTab === "yearly" && styles.isActive}`}
            >
              年払い
            </button>
          </div>
        </div>
      </div>

      <div className={styles.list}>
        <div className={styles.item}>
          <h3>Minimal</h3>
          <p className={styles.intro}>
            シングルページの
            <br />
            ミニマルなサイト
          </p>
          <div className={styles.price}>
            {activeTab === "yearly" ? (
              <>
                <div className={styles.normalPrice}>
                  ¥<span className={styles.priceNum}>{planMinimalData.yearlyPrice.toLocaleString()}</span>/年
                  <small>(税込)</small>
                </div>
                <div className={styles.campaignPrice}>
                  ¥<span className={styles.campaignNum}>{(planMinimalData.yearlyPrice / 2).toLocaleString()}</span>/年
                  <small>(税込)</small>
                </div>
              </>
            ) : (
              <>
                ¥<span>{planMinimalData.monthlyPrice.toLocaleString()}</span>/月
                <small>(税込)</small>
              </>
            )}
          </div>
          <ul>
            <li>
              <FaCheck />
              1Pまで制作
            </li>
            <li>
              <FaCheck />
              画像・テキスト修正（1回/月）
            </li>
            <li>
              <FaCheck />
              オリジナルデザイン
            </li>
            <li>
              <FaCheck />
              レスポンシブ対応
            </li>
            <li>
              <FaCheck />
              ドメイン無料
            </li>
            <li>
              <FaCheck />
              SEO対策
            </li>
            <li>
              <FaCheck />
              お問い合わせフォーム
            </li>
            <li>
              <FaCheck />
              高速サーバー / セキュリティ対策
            </li>
            <li>
              <FaCheck />
              公開後サポート
            </li>
            <li className={styles.isNotAvailable}>
              <FaCheck />
              お知らせ / ブログ等の更新機能
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h3>Basic</h3>
          <p className={styles.intro}>
            ページ数が充実した
            <br />
            ベーシックなサイト
          </p>
          <div className={styles.price}>
            {activeTab === "yearly" ? (
              <>
                <div className={styles.normalPrice}>
                  ¥<span className={styles.priceNum}>{planBasicData.yearlyPrice.toLocaleString()}</span>/年
                  <small>(税込)</small>
                </div>
                <div className={styles.campaignPrice}>
                  ¥<span className={styles.campaignNum}>{(planBasicData.yearlyPrice / 2).toLocaleString()}</span>/年
                  <small>(税込)</small>
                </div>
              </>
            ) : (
              <>
                ¥<span>{planBasicData.monthlyPrice.toLocaleString()}</span>/月<small>(税込)</small>
              </>
            )}
          </div>
          <ul>
            <li>
              <FaCheck />
              6Pまで制作
            </li>
            <li>
              <FaCheck />
              画像・テキスト修正（3回/月）
            </li>
            <li>
              <FaCheck />
              オリジナルデザイン
            </li>
            <li>
              <FaCheck />
              レスポンシブ対応
            </li>
            <li>
              <FaCheck />
              ドメイン無料
            </li>
            <li>
              <FaCheck />
              SEO対策
            </li>
            <li>
              <FaCheck />
              お問い合わせフォーム
            </li>
            <li>
              <FaCheck />
              高速サーバー / セキュリティ対策
            </li>
            <li>
              <FaCheck />
              公開後サポート
            </li>
            <li className={styles.isNotAvailable}>
              <FaCheck />
              お知らせ / ブログ等の更新機能
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <span className={styles.popular}>一番人気！</span>
          <h3>
            <span>CMS</span>
          </h3>
          <p className={styles.intro}>
            更新機能付きの
            <br />
            本格的なサイト
          </p>
          <div className={styles.price}>
            {activeTab === "yearly" ? (
              <>
                <div className={styles.normalPrice}>
                  ¥<span className={styles.priceNum}>{planCmsData.yearlyPrice.toLocaleString()}</span>/年
                  <small>(税込)</small>
                </div>
                <div className={styles.campaignPrice}>
                  ¥<span className={styles.campaignNum}>{(planCmsData.yearlyPrice / 2).toLocaleString()}</span>/年
                  <small>(税込)</small>
                </div>
              </>
            ) : (
              <>
                ¥<span>{planCmsData.monthlyPrice.toLocaleString()}</span>/月<small>(税込)</small>
              </>
            )}
          </div>
          <ul>
            <li>
              <FaCheck />
              8Pまで制作
            </li>
            <li>
              <FaCheck />
              画像・テキスト修正（3回/月）
            </li>
            <li>
              <FaCheck />
              オリジナルデザイン
            </li>
            <li>
              <FaCheck />
              レスポンシブ対応
            </li>
            <li>
              <FaCheck />
              ドメイン無料
            </li>
            <li>
              <FaCheck />
              SEO対策
            </li>
            <li>
              <FaCheck />
              お問い合わせフォーム
            </li>
            <li>
              <FaCheck />
              高速サーバー / セキュリティ対策
            </li>
            <li>
              <FaCheck />
              公開後サポート
            </li>
            <li>
              <FaCheck />
              お知らせ / ブログ等の更新機能
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.info}>
        <ul>
          <li>※ 画像・テキスト修正は、1回につき30分程度の作業時間となります。</li>
          <li>※ ドメイン無料は、.com, .jpなどの、年間の費用が2,000円以下のドメインに限ります。</li>
        </ul>
      </div>
    </>
  );
}
