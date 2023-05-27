"use client";

import React from "react";

import { motion } from "framer-motion";

import { getHeight } from "./array_item.utils";

import styles from "./array_item.module.scss";
import Text from "../text/text";
import classNames from "classnames";

interface ArrayItemProps {
  comparedIndicies: number[] | null;
  curIndex: number;
  maxValue: number;
  value: number;
  sorted: boolean;
}

const ANIMATION_DURATION = 0.5;

export default function ArrayItem({
  comparedIndicies,
  curIndex,
  maxValue,
  value,
  sorted,
}: ArrayItemProps) {
  const beingCompared = comparedIndicies?.includes(curIndex);
  const style: React.HTMLProps<HTMLDivElement>["style"] = {};

  style.height = getHeight(value, maxValue);

  return (
    <motion.div
      className={classNames(
        styles["array-item"],
        beingCompared && styles["array-item__active"],
        sorted && styles["array-item__sorted"]
      )}
      style={style}
      transition={{ duration: ANIMATION_DURATION }}
      layout
    >
      <Text size={18} inline semiBold>
        {value}
      </Text>
    </motion.div>
  );
}
