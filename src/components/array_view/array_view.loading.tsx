import React from "react";

import styles from "./array_view.module.scss";
import { LoadingArray } from "../array/array";
import AlgorithmControls from "../algorithm_controls/algorithm_controls";
import CodeBlock from "../code_block/code_block";

interface LoadingArrayViewProps {
  codeMap: Record<string, string>;
}

export default function LoadingArrayView({ codeMap }: LoadingArrayViewProps) {
  return (
    <div className={styles["array-view"]}>
      <LoadingArray />
      <div className={styles["array-view--control"]}>
        <AlgorithmControls />
      </div>
      <div className={styles["array-view--commentary__loading"]}>
        <p />
        <p />
      </div>
      <CodeBlock codeMap={codeMap} stepMap={{}} lineNumbers loading />
    </div>
  );
}
