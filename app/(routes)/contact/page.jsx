import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import styles from "./contact-page.module.scss";
import ContactForm from "@/app/_components/common/contact-form/contact-form";
import Container from "@/app/_components/common/container/container";
import { LuExternalLink } from "react-icons/lu";
import { LINE_URL_CONTACT_PAGE } from "@/app/_data/url";
import { CONTACT_METADATA } from "@/app/_data/metadata";
import { outputMetadata } from "@/app/_utils/outputMetadata";

export const metadata = outputMetadata(CONTACT_METADATA.title, CONTACT_METADATA.description, CONTACT_METADATA.slug);

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* <SubMv jpTitle="お問い合わせ" enTitle="contact" /> */}

      <SubMv jpTitle="お問い合わせ" enTitle="CONTACT" breadcrumbPaths={[{ name: "お問い合わせ" }]} />

      <div className={styles.body}>
        <Container className={styles.container}>
          <div className={styles.form}>
            <div className={styles.intro}>
              <p>
                サービス登録のご相談やご質問などございましたら、
                <br />
                下記お問い合わせフォームの項目をご記入の上「送信する」ボタンよりお進みください。
                <br />
              </p>
              <p>
                <a href={LINE_URL_CONTACT_PAGE} target="_blank" className={styles.link}>
                  <span>LINEでのご相談はこちら</span>
                  <LuExternalLink />
                </a>
              </p>
            </div>

            <ContactForm />
          </div>
        </Container>
      </div>
    </main>
  );
}
