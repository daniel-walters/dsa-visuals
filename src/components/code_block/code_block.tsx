import React, { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import styles from "./code_block.module.scss";
import capitalise from "@/utils/capitalise";
import CopyIcon from "../../../public/copy.svg";
import classNames from "classnames";
import { BubbleSortSteps } from "@/algorithms/bubble_sort/bubble_sort";
import Text from "../text/text";

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
    display: "block",
    width: "calc(100% + 16px)",
    position: "relative",
    right: "8px",
  };

  if (linesToHighlight.includes(lineNumber)) {
    style.backgroundColor = "#0780804d";
  }

  return { style };
}

interface LanguagePickerProps {
  languages: string[];
  currentLanguage: string;
  onChange: (language: string) => void;
}

function LanguagePicker({
  languages,
  currentLanguage,
  onChange,
}: LanguagePickerProps) {
  return (
    <div className={styles["language-picker"]}>
      {languages.map((language) => (
        <Text
          className={classNames(
            styles["language-picker--option"],
            currentLanguage === language &&
              styles[`language-picker--option__selected`]
          )}
          size={18}
          key={language}
          onClick={() => onChange(language)}
        >
          {capitalise(language)}
        </Text>
      ))}
    </div>
  );
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
        <LanguagePicker
          languages={availableLanguages}
          currentLanguage={language}
          onChange={(language: string) => {
            setLanguage(language);
            setCode(codeMap[language]);
          }}
        />
        <button onClick={() => navigator.clipboard.writeText(code)}>
          <CopyIcon />
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        lineProps={(lineNum) => getLineHighlight(lineNum, highlightLines)}
        showLineNumbers={lineNumbers}
        customStyle={{ backgroundColor: "#fffffe", padding: "8px" }}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
