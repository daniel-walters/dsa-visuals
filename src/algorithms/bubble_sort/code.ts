import { BubbleSortSteps } from "./bubble_sort";

type BubbleSortLineHighlights = Record<BubbleSortSteps, number[]>;

const javascriptSteps: BubbleSortLineHighlights = {
  start: [1],
  compare: [4],
  swap: [5, 6, 7],
  noSwap: [8],
  end: [11],
};

const goSteps: BubbleSortLineHighlights = {
  start: [1],
  compare: [4],
  swap: [5, 6, 7],
  noSwap: [8],
  end: [11],
};

const rustSteps: BubbleSortLineHighlights = {
  start: [1],
  compare: [4],
  swap: [5],
  noSwap: [6],
  end: [9],
};

export const stepMap = {
  javascript: javascriptSteps,
  go: goSteps,
  rust: rustSteps,
};

const javascript = `function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j + 1] < array[j]) {
        const temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}`;

const go = `func bubbleSort(array []int) {
  for i := 0; i < len(array); i++ {
    for j := 0; j < len(array) - 1 - i; j++ {
      if array[j + 1] < array[j] {
        temp := array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
}`;

const rust = `fn bubble_sort(array: &mut [i32]) {
  for i in 0..array.len() {
    for j in 0..(array.len() - 1 - i) {
      if array[j + 1] < array[j] {
        array.swap(j, j + 1);
      }
    }
  }
}`;

const codeMap = {
  javascript,
  go,
  rust,
};

export default codeMap;
