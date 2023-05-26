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
      <p className={styles["array-view--commentary__loading"]} />
      <CodeBlock codeMap={codeMap} lineNumbers loading />
    </div>
  );
}
