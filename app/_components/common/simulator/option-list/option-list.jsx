import { useState } from "react";
import { FREE_OPTIONS_DATA } from "@/app/_data/plan";
import CheckItem from "../check-item/check-item";
import styles from "./option-list.module.scss";

export default function OptionList({ label, options, categoryId, handleCheck, activePlan }) {
  const targetOptions = options.filter((option) => option.categoryId === categoryId);

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>{label}</p>

      <div className={styles.list}>
        {targetOptions.map((data) => {
          return (
            <CheckItem
              key={data.id}
              data={data}
              isChecked={data.isChecked}
              handleCheck={handleCheck}
              activePlan={activePlan}
            />
          );
        })}
      </div>
    </div>
  );
}
