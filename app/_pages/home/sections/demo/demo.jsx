"use client";

import Container from "@/app/_components/common/container/container";
import styles from "./demo.module.scss";
import Image from "next/image";
import { RiExternalLinkLine } from "react-icons/ri";
import { useEffect, useContext, useRef } from "react";
import { HeaderContext } from "@/app/_context/header-context";

export default function Demo() {
  const { setHeaderIsWhite } = useContext(HeaderContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerCallback = ([entry]) => {
      setHeaderIsWhite(entry.isIntersecting);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-1px 0px -100%",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const observeElement = () => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    };

    requestAnimationFrame(observeElement); // DOMがレンダリングされた後にオブザーバーを設定

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.demo} id="demo" ref={sectionRef}>
      <Container>
        <span className={styles.en}>DEMO</span>
        <h2>デモサイト</h2>
        <p className={styles.intro}>
          当サービスの各プランに基づいたデモサイトを用意しました。
          <br />
          それぞれのプランの機能を実際にご確認ください。
        </p>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.link}>
              <a
                href="https://hive-testing-themes.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.thumbWrap}
              >
                <Image
                  src="/images/demo/demo-jam-cafe-window.png"
                  width={474}
                  height={298}
                  alt="Jam Cafe"
                  className={styles.thumb}
                />
              </a>

              <div className={styles.content}>
                <div className={styles.plan}>標準プラン</div>
                <h3 className={styles.name}>アパレルECサイト</h3>
                <p className={styles.text}>
                  アパレルブランドをイメージして制作した、シンプルなサイトです。基本的なページ構成に加え、ブログ機能やお問い合わせ機能も備えています。
                  <br />
                  商品一覧ページでは、商品のカテゴリ分けや並び替え、検索機能も備えており、ユーザーが商品を探しやすい仕組みになっています。
                </p>

                <div className={styles.viewWrap}>
                  <a
                    href="https://hive-testing-themes.myshopify.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.view}
                  >
                    デモサイトを見る
                    <RiExternalLinkLine />
                  </a>
                </div>
              </div>
            </span>
          </li>
        </ul>
      </Container>
    </section>
  );
}
