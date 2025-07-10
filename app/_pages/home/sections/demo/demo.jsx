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
                href="https://demo-01.jam-factory.tech"
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
                <div className={styles.plan}>Minimal Plan</div>
                <h3 className={styles.name}>JAM CAFE</h3>
                <p className={styles.text}>
                  Minimalプランのシンプルで直感的なデザインを反映したデモサイト「JAM
                  CAFE」です。当プランは、必要最低限の機能を備えながら、使いやすさと見やすさを両立しています。
                  <br />
                  1ページ構成ながら、重要な情報をしっかりと掲載できるため、訪問者が必要な情報に迅速にアクセスできます。名刺代わりのホームページが欲しい方、小規模な事業者様におすすめです。
                </p>

                <div className={styles.viewWrap}>
                  <a
                    href="https://demo-01.jam-factory.tech"
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
          <li className={styles.item}>
            <span className={styles.link}>
              <a
                href="https://demo-02.jam-factory.tech"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.thumbWrap}
              >
                <Image
                  src="/images/demo/demo-flowerful-window.png"
                  width={1200}
                  height={900}
                  alt="Flowerful"
                  className={styles.thumb}
                />
              </a>

              <div className={styles.content}>
                <div className={styles.plan}>Basic Plan</div>
                <h3 className={styles.name}>Flowerful</h3>
                <p className={styles.text}>
                  豊富な情報を効果的に掲載できるBasicプランのデモサイト「Flowerful」です。当プランでは最大6ページまで制作可能ですので、Minimalプランでは物足りない方にとっておすすめです。
                  <br />
                  豊富なページ数を活かして、製品やサービスの詳細を伝えるのに最適です。
                </p>
                <div className={styles.viewWrap}>
                  <a
                    href="https://demo-02.jam-factory.tech"
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
          <li className={styles.item}>
            <span className={styles.link}>
              <a
                href="https://demo-03.jam-factory.tech"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.thumbWrap}
              >
                <Image
                  src="/images/demo/demo-jam-solutions-window.png"
                  width={1200}
                  height={900}
                  alt="JAM Solutions"
                  className={styles.thumb}
                />
              </a>

              <div className={styles.content}>
                <div className={styles.plan}>CMS Plan</div>
                <h3 className={styles.name}>JAM Solutions</h3>
                <p className={styles.text}>
                  豊富なページ数に加え、更新機能を備えたCMSプランのデモサイト「JAM
                  Solutions」です。お知らせやブログの更新が可能で、最新情報を簡単に発信できます。8P構成なのでMinimalやBasicプランよりも多くの情報を掲載できます。ホームページから情報を発信したい方、本格的なホームページを運営したい方におすすめです。
                </p>
                <div className={styles.viewWrap}>
                  <a
                    href="https://demo-03.jam-factory.tech"
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
