"use client";

import React, { useEffect, useReducer } from "react";

import bubbleSort from "@/algorithms/bubble_sort/bubble_sort";
import codeMap, { stepMap } from "@/algorithms/bubble_sort/code";
import getIterations from "@/algorithms/utils/get_iterations";
import getRandomArray from "@/utils/get_random_array";
import transformArray from "@/utils/transform_array";

import AlgorithmControls from "../algorithm_controls/algorithm_controls";
import Array from "../array/array";
import { ArrayContext, ArrayDispatchContext } from "./array_context";
import reducer, { initialState } from "./array_view.reducer";
import CodeBlock from "../code_block/code_block";

import styles from "./array_view.module.scss";
import Text from "../text/text";
import LoadingArrayView from "./array_view.loading";

const DEFAULT_ARRAY_SIZE = 7;

export default function ArrayView() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { index, iterations, step } = state;

  useEffect(() => {
    setTimeout(() => {
      const initialArray = getRandomArray(DEFAULT_ARRAY_SIZE);
      const transformedArray = transformArray(initialArray);

      dispatch({
        type: "SET_ITERATIONS",
        iterations: getIterations(bubbleSort, transformedArray),
      });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!iterations) {
    return <LoadingArrayView codeMap={codeMap} />;
  }

  const {
    array,
    comparedIndicies,
    commentary,
    step: fnStep,
  } = iterations[index];

  return (
    <ArrayContext.Provider value={state}>
      <ArrayDispatchContext.Provider value={dispatch}>
        <div className={styles["array-view"]}>
          <Array array={array} comparedIndicies={comparedIndicies} />
          <div className={styles["array-view--control"]}>
            <AlgorithmControls />
          </div>
          <div className={styles["array-view--commentary"]}>
            <Text size={18} semiBold inline>
              {step} / {iterations.length}:{" "}
            </Text>
            <Text size={18} inline>
              {commentary}
            </Text>
          </div>
          <CodeBlock
            codeMap={codeMap}
            stepMap={stepMap}
            lineNumbers
            step={fnStep}
          />
        </div>
      </ArrayDispatchContext.Provider>
    </ArrayContext.Provider>
  );
}
