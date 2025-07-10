"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import { IoArrowForward } from "react-icons/io5";
import { LuExternalLink } from "react-icons/lu";

import Btn from "@/app/_components/common/btn/btn";
import { LINE_URL_HAMBURGER_MENU } from "@/app/_data/url";

import styles from "./hamburger-menu.module.scss";

export default function HamburgerMenu() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  const closeHamburgerMenu = () => {
    setHamburgerMenuIsOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav className={`${styles.nav} ${hamburgerMenuIsOpen && styles.isOpen}`}>
      <div className={styles.inner}>
        <ul className={styles.list}>
          <li>
            <Link href="/" onClick={closeHamburgerMenu}>
              <span>TOP</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link href="/#point" onClick={closeHamburgerMenu}>
              <span>選ばれる理由</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link href="/#demo" onClick={closeHamburgerMenu}>
              <span>デモサイト</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link
              className={styles.childLink}
              href="https://demo-01.jam-factory.tech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeHamburgerMenu}
            >
              <span>Minimalプラン デモサイト</span>
              <LuExternalLink />
            </Link>
          </li>
          <li>
            <Link
              className={styles.childLink}
              href="https://demo-02.jam-factory.tech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeHamburgerMenu}
            >
              <span>Basicプラン デモサイト</span>
              <LuExternalLink />
            </Link>
          </li>
          <li>
            <Link
              className={styles.childLink}
              href="https://demo-03.jam-factory.tech"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeHamburgerMenu}
            >
              <span>CMSプラン デモサイト</span>
              <LuExternalLink />
            </Link>
          </li>
          <li>
            <Link href="/plan" onClick={closeHamburgerMenu}>
              <span>料金プラン</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link className={styles.childLink} href="/plan#option" onClick={closeHamburgerMenu}>
              <span>追加オプション</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link className={styles.childLink} href="/plan#simulator" onClick={closeHamburgerMenu}>
              <span>料金シミュレーター</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link href="/#flow" onClick={closeHamburgerMenu}>
              <span>制作の流れ</span>
              <IoArrowForward />
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={closeHamburgerMenu}>
              <span>よくあるご質問</span>
              <IoArrowForward />
            </Link>
          </li>
        </ul>

        <div className={styles.btns}>
          <Btn href="/contact" icon="arrow" onClick={closeHamburgerMenu}>
            お問い合わせ
          </Btn>
          <Btn href={LINE_URL_HAMBURGER_MENU} icon="line" theme="secondary" isExternal>
            LINEで相談
          </Btn>
        </div>

        <ul className={styles.subLinkList}>
          <li className={styles.subLinkItem}>
            <Link href="/privacy-policy" onClick={closeHamburgerMenu}>
              プライバシーポリシー
            </Link>
          </li>
          <li className={styles.subLinkItem}>
            <Link href="/commercial-law" onClick={closeHamburgerMenu}>
              特定商取引法に基づく表記
            </Link>
          </li>
        </ul>

        <div className={styles.bannerWrap}>
          <Link className={styles.banner} href="/monitor-campaign">
            <Image src="/images/common/banner-sp.svg" width={360} height={148} alt="モニターキャンペーン実施中！" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
