import React, { PropsWithChildren } from "react";

import classNames from "classnames";

import { robotoSlab } from "@/app/fonts";
import styles from "./heading.module.scss";

type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTags = `h${HeadingLevels}`;

type HeadingSizes = 32 | 48 | 64;

interface HeadingProps {
  level?: HeadingLevels;
  size?: HeadingSizes;
}

const HeadingComponents: Record<HeadingLevels, HeadingTags> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
} as const;

const DEFAULT_SIZE: HeadingSizes = 32;
const DEFAULT_LEVEL: HeadingLevels = 1;

export default function Heading({
  children,
  level,
  size,
}: PropsWithChildren<HeadingProps>) {
  const HeadingComponent = HeadingComponents[level || DEFAULT_LEVEL];

  const sizeClass = `heading__${size || DEFAULT_SIZE}`;

  return (
    <HeadingComponent
      className={classNames(
        robotoSlab.className,
        styles.heading,
        styles[sizeClass]
      )}
    >
      {children}
    </HeadingComponent>
  );
}
