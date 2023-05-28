import React, { PropsWithChildren } from "react";

import classNames from "classnames";

import { PropsWithClassName } from "@/utils/types";

import styles from "./text.module.scss";

type TextSizes = 14 | 16 | 18;

interface TextProps {
  inline?: boolean;
  semiBold?: boolean;
  size?: TextSizes;
  onClick: () => void;
}
const DEFAULT_SIZE: TextSizes = 14;

export default function Text({
  children,
  className,
  inline,
  onClick,
  semiBold,
  size,
}: PropsWithClassName<PropsWithChildren<TextProps>>) {
  const TextComponent = inline ? "span" : "p";

  const sizeClass = `text__${size || DEFAULT_SIZE}`;

  return (
    <TextComponent
      className={classNames(
        styles.text,
        styles[sizeClass],
        semiBold && styles["text__semiBold"],
        className && className
      )}
      onClick={onClick}
    >
      {children}
    </TextComponent>
  );
}
