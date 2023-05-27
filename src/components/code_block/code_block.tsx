import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import styles from "./code_block.module.scss";
import capitalise from "@/utils/capitalise";
import CopyIcon from "../../../public/copy.svg";
import classNames from "classnames";
import { BubbleSortSteps } from "@/algorithms/bubble_sort/bubble_sort";

interface CodeBlockProps {
  codeMap: Record<string, string>;
  stepMap: Record<string, Record<string, number[]>>;
  step?: BubbleSortSteps;
  defaultLanguage?: string;
  lineNumbers?: boolean;
  loading?: boolean;
}

function getLineHighlight(
  lineNumber: number,
  linesToHighlight: (number | undefined)[]
): React.HTMLProps<HTMLElement> {
  const style: React.HTMLProps<HTMLElement>["style"] = {
    width: "100%",
    display: "block",
  };

  if (linesToHighlight.includes(lineNumber)) {
    style.backgroundColor = "rgba(0, 200, 83, 0.5)";
  }

  return { style };
}

export default function CodeBlock({
  codeMap,
  stepMap,
  defaultLanguage = "javascript",
  lineNumbers,
  loading,
  step,
}: CodeBlockProps) {
  const availableLanguages = Object.keys(codeMap);

  const [language, setLanguage] = useState(defaultLanguage);
  const [code, setCode] = useState(codeMap[defaultLanguage]);

  const highlightLines = step ? stepMap[language][step] : [];

  return (
    <div
      className={classNames(
        styles["code-block"],
        loading && styles["code-block__loading"]
      )}
    >
      <div className={styles["code-block--header"]}>
        <select
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setCode(codeMap[e.target.value]);
          }}
        >
          {availableLanguages.map((lang) => (
            <option key={lang} value={lang}>
              {capitalise(lang)}
            </option>
          ))}
        </select>
        <button onClick={() => navigator.clipboard.writeText(code)}>
          <CopyIcon />
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        lineProps={(lineNum) => getLineHighlight(lineNum, highlightLines)}
        showLineNumbers={lineNumbers}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
