"use client";

import { useRef, useState, useEffect } from "react";
import svg from "/public/mv-flat-illust.svg";
import Image from "next/image";
import styles from "./mv-img.module.scss";

export default function MvImg() {
  const [isClassActive, setIsClassActive] = useState(true);
  const [isFirstSpanActive, setIsFirstSpanActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsClassActive(true);
      setIsFirstSpanActive((prev) => !prev);
      setTimeout(() => {
        setIsClassActive(false);
      }, 3000); // 3秒後にクラスを外す
    }, 5000); // 4秒サイクル
    // 最初の3秒後にクラスを外す
    const timeout = setTimeout(() => {
      setIsClassActive(false);
    }, 3000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.img}>
      <Image src={svg} alt="" />

      <div className={styles.circleWrap}>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
        </div>
        <span className={styles.circleText}>
          こんな方に
          <br />
          おすすめ！
        </span>
      </div>

      <div
        className={`${styles.bubbles} ${isClassActive && styles.isActive}`}
        data-first-span-active={isFirstSpanActive}
      >
        <div className={styles.bubble}>
          <span>事業を始めたての方</span>
          <span>初期費用を抑えたい方</span>
        </div>
        <div className={styles.bubble}>
          <span>とにかくホームページが欲しい方</span>
          <span>公開後もサポートして欲しい方</span>
        </div>
        <div className={styles.bubble}>
          <span>名刺代わりのサイトが欲しい方</span>
          <span>セキュリティ対策も任せたい方</span>
        </div>
        <div className={styles.bubble}>
          <span>面倒な作業を全て任せたい方</span>
          <span>まずは小さく始めたい方</span>
        </div>
      </div>
    </div>
  );
}
