import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";

import styles from "./code_block.module.scss";
import Text from "../text/text";

interface CodeBlockProps {
  code: string;
  highlight?: number | number[];
  language: string;
  lineNumbers?: boolean;
  variables?: [string, number | undefined][];
}

function getLineHighlight(
  lineNumber: number,
  linesToHighlight: (number | undefined)[]
): React.HTMLProps<HTMLElement> {
  if (linesToHighlight.includes(lineNumber)) {
    return {
      style: {
        backgroundColor: "rgba(0, 200, 83, 0.5)",
        width: "100%",
        display: "block",
      },
    };
  }

  return {};
}

export default function CodeBlock({
  code,
  highlight,
  language,
  lineNumbers,
  variables,
}: CodeBlockProps) {
  const highlightLines = Array.isArray(highlight)
    ? [...highlight]
    : [highlight];

  return (
    <div className={styles["code-block"]}>
      <div className={styles["code-block--header"]}>
        <Text size={18} semiBold>
          Javascript
        </Text>
        <button onClick={() => navigator.clipboard.writeText(code)}>
          Copy
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
      {variables && (
        <div className={styles["code-block--vars"]}>
          {variables.map(
            ([variable, value]) =>
              value !== undefined && (
                <Text key={variable} size={16} semiBold>
                  {variable}: {value}
                </Text>
              )
          )}
        </div>
      )}
    </div>
  );
}
