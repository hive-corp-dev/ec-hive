import Container from "@/app/_components/common/container/container";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

import styles from "./footer.module.scss";
import IconLine from "@/app/_components/icons/icon-line";
import { LINE_URL_FOOTER } from "@/app/_data/url";
import logoWhite from "/public/images/common/logo-white.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.row}>
          <div className={styles.logoCol}>
            <Link href="/" className={styles.logo}>
              <Image src={logoWhite} alt="ジャムファクトリー" />
            </Link>
            <p className={styles.text}>
              個人・小規模事業者様向けの
              <br />
              サブスク型ホームページ制作サービス
            </p>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navRow}>
              <li className={styles.navCol}>
                <Link className={styles.navLink} href="/#point">
                  選ばれる理由
                </Link>
              </li>
              <li className={styles.navCol}>
                <Link className={styles.navLink} href="/#demo">
                  デモサイト
                </Link>
                <ul className={styles.navSubList}>
                  <li className={styles.navSubItem}>
                    <a
                      className={styles.navSubLink}
                      href="https://demo-01.jam-factory.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Minimalプラン
                      <LuExternalLink />
                    </a>
                  </li>
                  <li className={styles.navSubItem}>
                    <a
                      className={styles.navSubLink}
                      href="https://demo-02.jam-factory.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Basicプラン
                      <LuExternalLink />
                    </a>
                  </li>
                  <li className={styles.navSubItem}>
                    <a
                      className={styles.navSubLink}
                      href="https://demo-03.jam-factory.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CMSプラン
                      <LuExternalLink />
                    </a>
                  </li>
                </ul>
              </li>
              <li className={styles.navCol}>
                <Link className={styles.navLink} href="/plan">
                  料金プラン
                </Link>
                <ul className={styles.navSubList}>
                  <li className={styles.navSubItem}>
                    <Link className={styles.navSubLink} href="/plan#option">
                      追加オプション
                    </Link>
                  </li>
                  <li className={styles.navSubItem}>
                    <Link className={styles.navSubLink} href="/plan#simulator">
                      料金シミュレーター
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles.navCol}>
                <Link className={styles.navLink} href="/#flow">
                  制作の流れ
                </Link>
              </li>
              <li className={styles.navCol}>
                <Link className={styles.navLink} href="/faq">
                  よくあるご質問
                </Link>
              </li>
              <li className={styles.navBtnsCol}>
                <Link href="/contact" className={styles.navBtn}>
                  <span>お問い合わせ</span>
                  <span className={styles.navBtnArrow}>
                    <IoArrowForward />
                  </span>
                </Link>
                <a href={LINE_URL_FOOTER} target="_blank" className={`${styles.navBtn} ${styles.isLine}`}>
                  <span>LINEで相談</span>
                  <span className={styles.navBtnLine}>
                    <IconLine />
                  </span>
                </a>
              </li>
            </ul>

            <ul className={styles.subNav}>
              <li className={styles.subNavItem}>
                <Link href="/privacy-policy" className={styles.subNavLink}>
                  プライバシーポリシー
                </Link>
              </li>
              <li className={styles.subNavItem}>
                <Link href="/commercial-law" className={styles.subNavLink}>
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </nav>

          <div className={styles.bannerWrap}>
            <Link className={styles.banner} href="/monitor-campaign">
              <Image src="/images/common/banner-sp.svg" width={360} height={148} alt="モニターキャンペーン実施中！" />
            </Link>
          </div>
        </div>

        <p className={styles.copy}>&copy; ECHive All Rights Reserved.</p>
      </Container>
    </footer>
  );
}
