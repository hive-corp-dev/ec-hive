import Image from "next/image";
import svg from "/public/mv-flat-illust.svg";
import Link from "next/link";

import styles from "./home-page.module.scss";
// import Plan from "../_pages/home/sections/plan/plan";
import Faq from "@/app/_pages/home/sections/faq/faq";
import Flow from "../_pages/home/sections/flow/flow";
import Cta from "../_pages/home/sections/cta/cta";
import About from "../_pages/home/sections/about/about";
import Feature from "../_pages/home/sections/feature/feature";
import Mv from "../_pages/home/sections/pattern-2/mv-pattern-2/mv";
import Concern from "../_pages/home/sections/pattern-2/concern/concern";
import Point from "../_pages/home/sections/pattern-2/point/point";
import Plan from "../_pages/home/sections/pattern-2/plan/plan";
import Flow2 from "../_pages/home/sections/pattern-2/flow/flow2";
import Faq2 from "../_pages/home/sections/pattern-2/faq/faq2";
import { IoArrowForward } from "react-icons/io5";
import Container from "../_components/common/container/container";
import lineIcon from "/public/icon-line.svg";
import lineIcon2 from "/public/icons8-line.svg";
import { LINE_URL_TOP_CONTACT } from "@/app/_data/url";
import { TOP_METADATA } from "../_data/metadata";
import { outputMetadata } from "../_utils/outputMetadata";
import Btn from "../_components/common/btn/btn";
import Demo from "../_pages/home/sections/demo/demo";
import GridSection from "../_pages/home/sections/grid-section/grid-section";
import IsometricGridDemo from "../_components/common/isometric-grid-demo/isometric-grid-demo";

export const metadata = outputMetadata(null, TOP_METADATA.description, TOP_METADATA.slug);

export default function Home() {
  return (
    <main className={styles.main}>
      <Mv />
      <Concern />
      <Point />
      <Plan />
      <Demo />
      <Flow2 />
      <Faq2 />

      <div className={styles.cta}>
        <Container>
          <span className={styles.en}>CONTACT</span>
          <h2>お問い合わせ</h2>
          <p>
            ビジネスを始めたての方、サイトについてよくわからない方のために、親身になってサポートします。
            <br />
            事前知識は一切必要ありませんので、お気軽にご相談ください。
          </p>

          <div className={styles.ctaBtns}>
            <Btn href="/contact" icon="arrow">
              お問い合わせ
            </Btn>

            <Btn href={LINE_URL_TOP_CONTACT} icon="line" theme="secondary" isExternal>
              LINEで相談
            </Btn>
          </div>
        </Container>
      </div>
    </main>
  );
}
