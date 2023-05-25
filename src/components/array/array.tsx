"use client";

import React from "react";

import { BubbleSortArray } from "@/algorithms/bubble_sort/bubble_sort";

import ArrayItem from "../array_item/array_item";

import styles from "./array.module.scss";

interface ArrayProps {
  array: BubbleSortArray;
  comparedIndicies: number[] | null;
}

export default function Array({ array, comparedIndicies }: ArrayProps) {
  const maxValue = Math.max(...array.map((item) => item.value));

  return (
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
  );
}
