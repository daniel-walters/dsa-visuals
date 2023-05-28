import React from "react";

import ArrayView from "@/components/array_view/array_view";
import Heading from "@/components/heading/heading";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["bubble-sort"]}>
      <Heading size={64}>Bubble Sort</Heading>
      <ArrayView />
    </div>
  );
}
