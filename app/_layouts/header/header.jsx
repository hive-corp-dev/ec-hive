"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { LINE_URL_HEADER } from "@/app/_data/url";
import HamburgerBtn from "@/app/_components/common/hamburger-btn/hamburger-btn";
import { HeaderContext } from "@/app/_context/header-context";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import { useContext } from "react";
import logo from "/public/images/common/logo-echive-gr.svg";
import logoWhite from "/public/images/common/logo-white.svg";
import Image from "next/image";

export default function Header() {
  const { headerIsWhite } = useContext(HeaderContext);
  const { hamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  return (
    <header
      className={`${styles.header} ${headerIsWhite && styles.isWhite} ${hamburgerMenuIsOpen && styles.isHamburgerOpen}`}
    >
      <div className={styles.headerInner}>
        <Link href="/" className={styles.logo}>
          <Image src={logoWhite} alt="ジャムファクトリー" />
          <Image src={logo} alt="ジャムファクトリー" />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <Link href="/#point">選ばれる理由</Link>
            </li>
            <li>
              <Link href="/#demo">デモサイト</Link>
            </li>
            <li>
              <Link href="/plan">料金プラン</Link>
            </li>
            <li>
              <Link href="/#flow">制作の流れ</Link>
            </li>
            <li>
              <Link href="/faq">よくあるご質問</Link>
            </li>
          </ul>
          <Link href="/contact" className={styles.btn}>
            お問い合わせ
          </Link>
        </nav>
        <HamburgerBtn />
      </div>
    </header>
  );
}
