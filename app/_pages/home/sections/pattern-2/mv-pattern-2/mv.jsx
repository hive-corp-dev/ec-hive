"use client";

import styles from "./mv.module.scss";
import Btn from "@/app/_components/common/btn/btn";
import { PLAN_DATA } from "@/app/_data/plan";
import Image from "next/image";
import cafe from "@/public/images/common/cafe.svg";
import supermarket from "@/public/images/common/super.svg";
import store from "@/public/images/common/store.svg";
import shop from "@/public/images/common/shop.svg";
import famCafe from "@/public/images/common/fam-cafe.svg";
import store2 from "@/public/images/common/store-2.svg";
import mall from "@/public/images/common/mall.svg";
import store3 from "@/public/images/common/store-3.svg";
import { useEffect, useState } from "react";

export default function Mv() {
  const planMinimalData = PLAN_DATA.find((plan) => plan.planId === "minimal");
  const [glowingOrbs, setGlowingOrbs] = useState([]);

  useEffect(() => {
    const orbCount = 15;
    const newOrbs = [];

    for (let i = 0; i < orbCount; i++) {
      // 4つの斜め方向のみ
      const direction = Math.floor(Math.random() * 4);
      let startX, startY, endX, endY;

      switch (direction) {
        case 0: // 左下から右上（45度の角度）
          // 左辺または下辺からランダムに出現
          if (Math.random() > 0.5) {
            // 左辺から
            startX = -10;
            startY = Math.random() * 120;
            endX = startY + 120;
            endY = startY - 120;
          } else {
            // 下辺から
            startY = 110;
            startX = Math.random() * 120;
            endX = startX + 120;
            endY = startY - 120;
          }
          break;
        case 1: // 右上から左下（45度の角度）
          // 右辺または上辺からランダムに出現
          if (Math.random() > 0.5) {
            // 右辺から
            startX = 110;
            startY = Math.random() * 120;
            endX = startY - 120;
            endY = startY + 120;
          } else {
            // 上辺から
            startY = -10;
            startX = Math.random() * 120;
            endX = startX - 120;
            endY = startY + 120;
          }
          break;
        case 2: // 右下から左上（45度の角度）
          // 右辺または下辺からランダムに出現
          if (Math.random() > 0.5) {
            // 右辺から
            startX = 110;
            startY = Math.random() * 120;
            endX = startY - 120;
            endY = startY - 120;
          } else {
            // 下辺から
            startY = 110;
            startX = Math.random() * 120;
            endX = startX - 120;
            endY = startY - 120;
          }
          break;
        case 3: // 左上から右下（45度の角度）
          // 左辺または上辺からランダムに出現
          if (Math.random() > 0.5) {
            // 左辺から
            startX = -10;
            startY = Math.random() * 120;
            endX = startY + 120;
            endY = startY + 120;
          } else {
            // 上辺から
            startY = -10;
            startX = Math.random() * 120;
            endX = startX + 120;
            endY = startY + 120;
          }
          break;
      }

      newOrbs.push({
        id: i,
        startX,
        startY,
        endX,
        endY,
        duration: 20 + Math.random() * 10,
        delay: Math.random() * 4,
        size: 20 + Math.random() * 25,
      });
    }

    setGlowingOrbs(newOrbs);
  }, []);

  return (
    <section className={styles.mv}>
      <div className={styles.bgShapes}>
        {glowingOrbs.map((orb) => (
          <div
            key={orb.id}
            className={styles.glowingOrb}
            style={{
              "--start-x": `${orb.startX}%`,
              "--start-y": `${orb.startY}%`,
              "--end-x": `${orb.endX}%`,
              "--end-y": `${orb.endY}%`,
              "--duration": `${orb.duration}s`,
              "--delay": `${orb.delay}s`,
              "--size": `${orb.size}px`,
            }}
          />
        ))}
      </div>
      <div className={styles.bgGrid}></div>
      <div className={styles.boxWrap}>
        <Image src={shop} alt="shop" className={`${styles.box} ${styles.box2} ${styles.shop}`} />
        <Image src={supermarket} alt="supermarket" className={`${styles.box} ${styles.box3} ${styles.supermarket}`} />
        <Image src={store} alt="store" className={`${styles.box} ${styles.box4} ${styles.store}`} />
        <Image src={shop} alt="shop" className={`${styles.box} ${styles.box5} ${styles.shop}`} />
        <Image src={supermarket} alt="supermarket" className={`${styles.box} ${styles.box6} ${styles.supermarket}`} />
        <Image src={store3} alt="cafe" className={`${styles.box} ${styles.box7} ${styles.cafe}`} />
        <Image src={cafe} alt="cafe" className={`${styles.box} ${styles.box8} ${styles.cafe}`} />
        <Image src={store} alt="store" className={`${styles.box} ${styles.box9} ${styles.store}`} />
        <Image src={famCafe} alt="store" className={`${styles.box} ${styles.box10} ${styles.store}`} />
        <Image src={mall} alt="supermarket" className={`${styles.box} ${styles.box11} ${styles.supermarket}`} />
        <Image src={shop} alt="shop" className={`${styles.box} ${styles.box12} ${styles.shop}`} />
        <Image src={store2} alt="cafe" className={`${styles.box} ${styles.box13} ${styles.cafe}`} />
        <Image src={store3} alt="shop" className={`${styles.box} ${styles.box14} ${styles.shop}`} />
        <Image src={store} alt="store" className={`${styles.box} ${styles.box15} ${styles.store}`} />
        <Image src={cafe} alt="cafe" className={`${styles.box} ${styles.box16} ${styles.cafe}`} />
        <Image src={store} alt="store" className={`${styles.box} ${styles.box17} ${styles.store}`} />
      </div>

      <div className={styles.content}>
        <p className={styles.intro}>Shopify構築・運用サポート</p>
        <h1 className={styles.title}>
          私たちは高い技術力を活かし
          <br />
          高品質なECサイトを構築します
        </h1>

        <div className={styles.btns}>
          <div className={styles.btn}>
            <Btn href="/contact" icon="arrow">
              お問い合わせ
            </Btn>
          </div>
          <div className={styles.btn}>
            <Btn href="/plan" theme="secondary-reverse" icon="arrow">
              料金プラン
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
}
