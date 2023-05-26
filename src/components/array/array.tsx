"use client";

import React from "react";

import classNames from "classnames";

import { BubbleSortArray } from "@/algorithms/bubble_sort/bubble_sort";

import ArrayItem from "../array_item/array_item";

import styles from "./array.module.scss";

interface ArrayProps {
  array: BubbleSortArray;
  comparedIndicies: number[] | null;
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

export default function Array({ array, comparedIndicies }: ArrayProps) {
  const maxValue = Math.max(...array.map((item) => item.value));

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
          />
        ))}
      </div>
      <div className={styles["array--border"]} />
    </>
  );
}
