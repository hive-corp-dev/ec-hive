"use client";
import { useState } from "react";
import SectionTitle from "@/app/_components/common/section-title/section-title";
import Container from "@/app/_components/common/container/container";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import styles from "./plan.module.scss";
import Btn from "@/app/_components/common/btn/btn";

export default function Plan() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className={styles.section}>
      <SectionTitle enTitle="Plans" jpTitle="料金プラン" isWhite />
      <Container>
        <div className={styles.toggleBtns}>
          <div className={styles.toggleCol}>
            <button
              onClick={() => setActiveTab("monthly")}
              className={`${styles.toggleBtn} ${activeTab === "monthly" && styles.isActive}`}
            >
              月間契約
            </button>
          </div>
          <div className={styles.toggleCol}>
            <p className={styles.toggleSale}>1ヶ月分お得!</p>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`${styles.toggleBtn} ${activeTab === "yearly" && styles.isActive}`}
            >
              年間契約
            </button>
          </div>
        </div>

        <ul className={styles.cards}>
          <li className={styles.card}>
            <p className={styles.planName}>シンプルプラン</p>
            <div className={styles.planBody}>
              {activeTab === "monthly" && (
                <div className={styles.priceBlock}>
                  <p className={styles.head}>月間契約の場合</p>
                  <div className={styles.price}>
                    <strong>¥6,980</strong>
                    <span>/月</span>
                    <small>(税込)</small>
                  </div>
                </div>
              )}

              {activeTab === "yearly" && (
                <div className={styles.priceBlock}>
                  <p className={styles.head}>年間契約の場合</p>
                  <div className={styles.price}>
                    <strong>¥76,780</strong>
                    <span>/年</span>
                    <small>(税込)</small>
                  </div>
                </div>
              )}

              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <FaCircleCheck />
                  6Pまで制作
                  <div className={styles.pageStructure}>
                    <p>ページ構成例</p>
                    <ul className={styles.blankLines}>
                      <li>・TOPページ</li>
                      <li>・サービス概要</li>
                      <li>・会社概要</li>
                      <li>・プライバシーポリシー</li>
                      <li>・お問い合わせ</li>
                      <li>・お問い合わせ完了</li>
                    </ul>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <FaCircleCheck />
                  更新機能(CMS)なし
                </li>
              </ul>

              <div className={styles.desc}>
                <p>
                  6P構成のシンプルなホームページを制作します。名刺がわりのホームページが欲しい方、お知らせなどの更新が必要ない方におすすめのプランです。
                </p>
              </div>
            </div>
          </li>
          <li className={styles.card}>
            <p className={styles.planName}>スタンダードプラン</p>
            <div className={styles.planBody}>
              {activeTab === "monthly" && (
                <div className={styles.priceBlock}>
                  <p className={styles.head}>月間契約の場合</p>
                  <div className={styles.price}>
                    <strong>¥9,980</strong>
                    <span>/月</span>
                    <small>(税込)</small>
                  </div>
                </div>
              )}

              {activeTab === "yearly" && (
                <div className={styles.priceBlock}>
                  <p className={styles.head}>年間契約の場合</p>
                  <div className={styles.price}>
                    <strong>¥109,780</strong>
                    <span>/年</span>
                    <small>(税込)</small>
                  </div>
                </div>
              )}

              <ul className={styles.infoList}>
                <li className={styles.infoItem}>
                  <FaCircleCheck />
                  8Pまで制作
                  <div className={styles.pageStructure}>
                    <p>ページ構成例</p>
                    <ul>
                      <li>・TOPページ</li>
                      <li>・サービス概要</li>
                      <li>・会社概要</li>
                      <li>・プライバシーポリシー</li>
                      <li>・お知らせ一覧</li>
                      <li>・お知らせ詳細</li>
                      <li>・お問い合わせ</li>
                      <li>・お問い合わせ完了</li>
                    </ul>
                  </div>
                </li>
                <li className={styles.infoItem}>
                  <FaCircleCheck />
                  更新機能(CMS)あり
                </li>
              </ul>

              <div className={styles.desc}>
                <p>
                  8P構成の一般的なホームページを制作します。お知らせやブログなど、お客様自身で更新したい項目がある場合におすすめのプランです。
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div className={styles.title}>プラン毎のサービス内容</div>

        <div className={styles.tableWrap}>
          <div className={styles.table}>
            <div className={`${styles.tableRow} ${styles.isHead}`}>
              <div className={`${styles.tableCol} ${styles.isBlank}`}></div>
              <div className={`${styles.tableCol} ${styles.isSimple}`}>シンプル</div>
              <div className={`${styles.tableCol} ${styles.isStandard}`}>スタンダード</div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCol}>ページ数</div>
              <div className={styles.tableCol}>6ページ</div>
              <div className={`${styles.tableCol}`}>8ページ</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>修正回数</div>
              <div className={styles.tableCol}>3回</div>
              <div className={`${styles.tableCol} `}>3回</div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>記事更新機能(CMS)</div>
              <div className={styles.tableCol}>
                <span className={styles.cross}></span>
              </div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>オリジナルデザイン</div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>SEO対策</div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>お問い合わせフォーム</div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
            </div>

            <div className={styles.tableRow}>
              <div className={styles.tableCol}>ドメイン無料</div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCol}>チャットサポート</div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
              <div className={styles.tableCol}>
                <span className={styles.circle}></span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>上記以外にもさまざまなオプションを用意しております。</p>

          <div className={styles.btn}>
            <Btn href="/" theme="main-reverse" icon="arrow">
              詳しい料金プランを見る
            </Btn>
          </div>
        </div>
      </Container>
    </section>
  );
}
