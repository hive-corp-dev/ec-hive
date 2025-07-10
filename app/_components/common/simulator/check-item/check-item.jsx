"use client";

import { useState, useEffect } from "react";
import styles from "./check-item.module.scss";

export default function CheckItem({ data, isChecked, handleCheck, activePlan }) {
  const { id, name, availablePlans, showInSimulation } = data;

  const isAvailable = availablePlans.includes(activePlan);

  // show only if showinsimulation is true
  if (showInSimulation === false) {
    return null;
  }

  return (
    <button
      key={id}
      className={`${styles.check} ${data.isChecked === true && styles.isChecked} ${
        isAvailable === false && styles.isDisabled
      }`}
      onClick={() => {
        handleCheck(id);
        // setChecked(!checked);
      }}
      disabled={!isAvailable}
    >
      <span>{name}</span>
    </button>
  );
}
