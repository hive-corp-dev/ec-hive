"use client";

import { useContext, useEffect, useState } from "react";
import { HamburgerMenuContext } from "@/app/_context/hamburger-menu-context";
import styles from "./hamburger-btn.module.scss";

export default function HamburgerBtn() {
  const { hamburgerMenuIsOpen, setHamburgerMenuIsOpen } = useContext(HamburgerMenuContext);

  // toggle hamburger menu
  const toggleHamburgerMenu = () => {
    setHamburgerMenuIsOpen((prev) => !prev);

    if (!hamburgerMenuIsOpen) {
      document.body.style.overflow = "hidden";
    }

    if (hamburgerMenuIsOpen) {
      document.body.style.overflow = "auto";
    }
  };

  // close hamburger menu
  const closeHamburgerMenu = () => {
    setHamburgerMenuIsOpen(false);
  };

  return (
    <button
      aria-label="ハンバーガーメニューを開閉する"
      className={`${styles.btn} ${hamburgerMenuIsOpen && styles.isOpen}`}
      type="button"
      onClick={toggleHamburgerMenu}
    >
      <span></span>
    </button>
  );
}
