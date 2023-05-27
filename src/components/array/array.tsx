"use client";

import React from "react";

import classNames from "classnames";

import { BubbleSortArray } from "@/algorithms/bubble_sort/bubble_sort";

import ArrayItem from "../array_item/array_item";

import styles from "./array.module.scss";

interface ArrayProps {
  array: BubbleSortArray;
  comparedIndicies: number[] | null;
  numSorted: number;
}

export function LoadingArray() {
  const dummyArray = [25, 50, 75, 100, 125, 150, 175];
  const maxValue = 175;

  return (
    <>
      <div className={classNames(styles.array, styles["array__loading"])}>
        {dummyArray.map((e, i) => (
          <ArrayItem
            key={`${e}--${i}`}
            curIndex={i}
            maxValue={maxValue}
            value={e}
            comparedIndicies={null}
            sorted={false}
          />
        ))}
      </div>
      <div
        className={classNames(
          styles["array--border"],
          styles["array--border__loading"]
        )}
      />
    </>
  );
}

export default function Array({
  array,
  comparedIndicies,
  numSorted,
}: ArrayProps) {
  const maxValue = Math.max(...array.map((item) => item.value));
  // numSorted = 1, i = 5 : i >= 6 - 1
  // numSorted = 2, i = 4, 5: i >= 6 - 2
  // numSorted = 3, i = 3, 4, 5 i >= 6 - 3
  // numSorted = 6, i = 0 -> 5 i >= 6 - 6

  return (
    <>
      <div className={styles.array}>
        {array.map(({ id, value }, i) => (
          <ArrayItem
            key={id}
            comparedIndicies={comparedIndicies}
            curIndex={i}
            maxValue={maxValue}
            value={value}
            sorted={i >= array.length - numSorted}
          />
        ))}
      </div>
      <div className={styles["array--border"]} />
    </>
  );
}
