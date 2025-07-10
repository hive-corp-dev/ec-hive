import SubMv from "@/app/_components/common/sub-mv/sub-mv";
import styles from "./faq-page.module.scss";
import Container from "@/app/_components/common/container/container";
import AccordionList from "@/app/_components/common/accordion-list/accordion-list";
import { FAQ_METADATA } from "@/app/_data/metadata";
import { outputMetadata } from "@/app/_utils/outputMetadata";
import { FaChevronDown } from "react-icons/fa";
import { groupFAQs } from "@/app/_utils/faq";
import { FAQ_DATA, FAQ_CAT_DATA } from "@/app/_data/faq";
import { FaCircleArrowDown } from "react-icons/fa6";

export const metadata = outputMetadata(FAQ_METADATA.title, FAQ_METADATA.description, FAQ_METADATA.slug);

export default function FaqPage() {
  const groupedFAQs = groupFAQs(FAQ_DATA);

  const getCategoryId = (categoryName) => {
    return FAQ_CAT_DATA.find((item) => item.name === categoryName).id;
  };

  return (
    <main className={styles.main}>
      <SubMv jpTitle="よくあるご質問" enTitle="Q&A" breadcrumbPaths={[{ name: "よくあるご質問" }]} />

      <div className={styles.body}>
        <Container>
          <div className={styles.bodyRow}>
            <div className={styles.navCol}>
              <ul>
                {
                  // ここにFAQ_CAT_DATAを使ってリストを生成
                  FAQ_CAT_DATA.map((category) => (
                    <li key={category.id}>
                      <a href={`#${category.id}`}>
                        <span>{category.name}</span>
                        <FaCircleArrowDown />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className={styles.blocks}>
              {Object.keys(groupedFAQs).map((category) => {
                return (
                  <div key={category} className={styles.block} id={getCategoryId(category)}>
                    <h2>{category}</h2>
                    <div className={styles.subBlocks}>
                      {Object.keys(groupedFAQs[category]).map((subCategory) => (
                        <div key={subCategory} className={styles.subBlock}>
                          <h3>{subCategory}</h3>
                          <div className={styles.accordion}>
                            <AccordionList data={groupedFAQs[category][subCategory]} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
