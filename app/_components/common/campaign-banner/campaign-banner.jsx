"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";

import styles from "./campaign-banner.module.scss";

export default function CampaignBanner() {
  const [bannerIsActive, setBannerIsActive] = useState();
  const [initialLoad, setInitialLoad] = useState(true);

  const handleRemoveBanner = () => {
    sessionStorage.setItem("bannerIsActive", false);
    setBannerIsActive(false);
  };

  useEffect(() => {
    const sessionValue = sessionStorage.getItem("bannerIsActive");

    // 初回ロード時
    if (initialLoad && !sessionValue) {
      // バナーをactiveにする
      sessionStorage.setItem("bannerIsActive", "true");
      setBannerIsActive(true);

      setInitialLoad(false);
    }
    // 2回目以降
    else {
      if (sessionValue === "true") {
        setBannerIsActive(true);
      } else {
        setBannerIsActive(false);
      }
    }
  }, []);

  return (
    bannerIsActive === true && (
      <div className={styles.bannerWrap}>
        <button className={styles.closeBtn} onClick={handleRemoveBanner} aria-label="バナーを非表示にする"></button>
        <Link className={styles.banner} href="/monitor-campaign" onClick={handleRemoveBanner}>
          <Image
            className={styles.isPc}
            src="/images/common/banner.svg"
            width={360}
            height={148}
            alt="モニターキャンペーン実施中！"
          />
          <Image
            className={styles.isSp}
            src="/images/common/banner-sp.svg"
            width={360}
            height={148}
            alt="モニターキャンペーン実施中！"
          />
        </Link>
      </div>
    )
  );
}
