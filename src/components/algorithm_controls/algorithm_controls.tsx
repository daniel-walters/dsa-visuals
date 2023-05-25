"use client";

import React, { useContext, useRef, useState } from "react";

import Play from "../../../public/play.svg";
import Pause from "../../../public/pause.svg";
import Next from "../../../public/next.svg";
import Prev from "../../../public/prev.svg";
import End from "../../../public/end.svg";
import Reset from "../../../public/reset.svg";

import {
  ArrayContext,
  ArrayDispatchContext,
} from "../array_view/array_context";

import styles from "./algorithm_controls.module.scss";

const SPEED = 1000;

export default function AlgorithmControls() {
  const state = useContext(ArrayContext);
  const dispatch = useContext(ArrayDispatchContext);

  const [playMode, setPlayMode] = useState(false);

  const intervalRef = useRef<NodeJS.Timer>();

  if (!state || !dispatch) return null;

  const { index, iterations } = state;

  const atStart = index === 0;
  const atEnd = !!iterations && index === iterations.length - 1;

  const handleNext = () => dispatch?.({ type: "INCREMENT" });
  const handlePrev = () => dispatch?.({ type: "DECREMENT" });
  const handleReset = () => dispatch?.({ type: "RESET" });
  const handleEnd = () => dispatch?.({ type: "END" });

  const startPlay = () => {
    setPlayMode(true);

    let index = state.index;
    let length = state.iterations?.length;

    const interval = setInterval(() => {
      index++;

      if (length && index < length) {
        dispatch?.({ type: "INCREMENT" });
      } else {
        endPlay();
      }
    }, SPEED);

    intervalRef.current = interval;
  };

  const endPlay = () => {
    setPlayMode(false);
    clearTimeout(intervalRef.current);
  };

  return (
    <div className={styles["algorithm-controls"]}>
      <button onClick={handleReset} disabled={atStart || playMode}>
        <Reset />
      </button>
      <button onClick={handlePrev} disabled={atStart || playMode}>
        <Prev />
      </button>
      <button onClick={playMode ? endPlay : startPlay} disabled={atEnd}>
        {playMode ? <Pause /> : <Play />}
      </button>
      <button onClick={handleNext} disabled={atEnd || playMode}>
        <Next />
      </button>
      <button onClick={handleEnd} disabled={atEnd || playMode}>
        <End />
      </button>
    </div>
  );
}
