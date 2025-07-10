import AccordionList from "@/app/_components/common/accordion-list/accordion-list";
import Container from "@/app/_components/common/container/container";
import SectionTitle from "@/app/_components/common/section-title/section-title";

import styles from "./faq.module.scss";

const data = [
  {
    question: "サーバー代・ドメイン代は無料ですか？",
    answer: (
      <>
        <p>
          はい、サーバー代・ドメイン代ともにプランの料金に含まれております。
          <br />
          ただしドメインに関しては、.com、.net以外をご希望の場合はお客様負担となります。
        </p>
      </>
    ),
  },
  {
    question: "解約時に違約金は発生しますか？",
    answer: (
      <>
        <p>
          解約時の違約金は発生しません。
          <br />
          ただし最低契約期間は3ヶ月となっておりますので、もし3ヶ月以内に解約される場合は残りの月数の料金が発生します。
        </p>
      </>
    ),
  },
  {
    question: "保守管理・運用のプランの契約期間はどのくらいですか？",
    answer: (
      <>
        <p>最低3ヶ月間の契約とさせていただいております。</p>
      </>
    ),
  },
  {
    question: "月額料金以外に費用はかかりますか？",
    answer: (
      <>
        <p>
          基本的にはプランに応じた月額料金のみの費用となります。
          <br />
          しかし以下のような場合は、月額料金以外の料金が発生します。
          <ul>
            <li>・追加オプションを購入いただいた場合</li>
            <li>・.com、.net以外のドメインをご希望の場合</li>
          </ul>
        </p>
      </>
    ),
  },
];

export default function Faq() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionTitle enTitle="Q&A" jpTitle="よくある質問" />
        <div className={styles.accordion}>
          <AccordionList data={data} isFirstItemOpen />
        </div>
      </Container>
    </section>
  );
}
