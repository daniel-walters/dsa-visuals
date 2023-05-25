"use client";

import React from "react";

import { motion } from "framer-motion";

import { getHeight } from "./array_item.utils";

import styles from "./array_item.module.scss";
import Text from "../text/text";

interface ArrayItemProps {
  comparedIndicies: number[] | null;
  curIndex: number;
  maxValue: number;
  value: number;
}

const ANIMATION_DURATION = 0.5;

export default function ArrayItem({
  comparedIndicies,
  curIndex,
  maxValue,
  value,
}: ArrayItemProps) {
  const beingCompared = comparedIndicies?.includes(curIndex);
  const style: React.HTMLProps<HTMLDivElement>["style"] = {};

  style.height = getHeight(value, maxValue);

  if (beingCompared) {
    style.borderColor = "blue";
  }

  return (
    <motion.div
      className={styles["array-item"]}
      style={style}
      transition={{ duration: ANIMATION_DURATION }}
      layout
    >
      <Text inline>{value}</Text>
    </motion.div>
  );
}
