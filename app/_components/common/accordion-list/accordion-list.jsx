import AccordionItem from "../accordion-item/accordion-item";

import styles from "./accordion-list.module.scss";

export default function AccordionList({ data, isFirstItemOpen }) {
  return (
    <dl className={styles.list}>
      {data.map((item, i) => {
        if (isFirstItemOpen) {
          if (i === 0) {
            return <AccordionItem key={i} answer={item.answer} question={item.question} isOpen={true} />;
          } else {
            return <AccordionItem key={i} answer={item.answer} question={item.question} />;
          }
        } else {
          return <AccordionItem key={i} answer={item.answer} question={item.question} />;
        }
      })}
    </dl>
  );
}
