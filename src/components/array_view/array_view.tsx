"use client";

import React, { useEffect, useReducer } from "react";

import bubbleSort from "@/algorithms/bubble_sort";
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

const DEFAULT_ARRAY_SIZE = 7;

const code = `function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}`;

export default function ArrayView() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { index, iterations, step } = state;

  useEffect(() => {
    const initialArray = getRandomArray(DEFAULT_ARRAY_SIZE);
    const transformedArray = transformArray(initialArray);

    dispatch({
      type: "SET_ITERATIONS",
      iterations: getIterations(bubbleSort, transformedArray),
    });
  }, []);

  if (!iterations) {
    // TODO: Replace with a Loading state
    return null;
  }

  const {
    array,
    comparedIndicies,
    commentary,
    innerLoop,
    outerLoop,
    lineNums,
  } = iterations[index];

  return (
    <ArrayContext.Provider value={state}>
      <ArrayDispatchContext.Provider value={dispatch}>
        <div className={styles["array-view"]}>
          <Array array={array} comparedIndicies={comparedIndicies} />
          <div className={styles["array-view--control"]}>
            <AlgorithmControls />
          </div>
          <Text size={18} semiBold inline>
            {step} / {iterations.length}:{" "}
          </Text>
          <Text size={18} inline>
            {commentary}
          </Text>
          <CodeBlock
            code={code}
            highlight={lineNums}
            language="javascript"
            lineNumbers
            variables={[
              ["i", outerLoop],
              ["j", innerLoop],
            ]}
          />
        </div>
      </ArrayDispatchContext.Provider>
    </ArrayContext.Provider>
  );
}
