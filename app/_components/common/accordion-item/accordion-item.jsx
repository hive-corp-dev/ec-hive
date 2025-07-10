"use client";

import { useRef, useEffect, useState } from "react";
import styles from "./accordion-item.module.scss";

export default function AccordionItem({ question, answer, isOpen }) {
  const [showContents, setShowContents] = useState(isOpen);
  const [contentHeight, setContentHeight] = useState(0);
  const childElement = useRef(null);

  useEffect(() => {
    if (childElement.current) {
      const childHeight = childElement.current.clientHeight;
      setContentHeight(childHeight);
    }
  }, []);

  const onClickAccordionToggle = (e) => {
    if (childElement.current) {
      if (e.target.tagName === "A") {
        return;
      } else {
        const childHeight = childElement.current.clientHeight;
        setContentHeight(childHeight);
        setShowContents(!showContents);
      }
    }
  };

  return (
    <div className={styles.wrap} onClick={onClickAccordionToggle}>
      <dt className={`${styles.question} ${showContents && styles.isOpen}`}>
        <span className={styles.questionIcon}>Q</span>
        <span className={styles.questionText}>{question}</span>
      </dt>
      <dd
        className={styles.answer}
        style={{
          height: showContents ? `${contentHeight}px` : "0",
          opacity: showContents ? 1 : 0,
          padding: showContents ? `2.4rem 0 0.8rem` : "0",
        }}
      >
        <div ref={childElement} className={styles.answerContent}>
          <span className={styles.answerIcon}>A</span>
          <div className={styles.answerText}>{answer}</div>
        </div>
      </dd>
    </div>
  );
}
