export type BubbleSortArrayElement = {
  id: string;
  value: number;
};

export type BubbleSortSteps = "start" | "compare" | "swap" | "noSwap" | "end";

export type BubbleSortIteration = {
  array: BubbleSortArray;
  comparedIndicies: number[] | null;
  commentary: string;
  step?: BubbleSortSteps;
  numSorted: number;
};

export type BubbleSortArray = BubbleSortArrayElement[];

export type BubbleSortFn = (
  array: BubbleSortArray
) => Generator<BubbleSortIteration, BubbleSortIteration, unknown>;

const bubble_sort: BubbleSortFn = function* bubble_sort(array) {
  let comparedIndicies: number[] = [];
  let commentary = "";
  let step: BubbleSortSteps;
  let numSorted = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      comparedIndicies = [j, j + 1];
      commentary = `${array[j + 1].value} is greater than or equal to ${
        array[j].value
      }, so they remain where they are.`;
      yield {
        array,
        comparedIndicies,
        commentary: `Compare ${array[j].value} with ${array[j + 1].value}`,
        step: "compare",
        numSorted,
      };
      if (array[j + 1].value < array[j].value) {
        commentary = `${array[j + 1].value} is less than ${
          array[j].value
        }, so they swap places.`;
        step = "swap";
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        step = "noSwap";
      }

      if (j === array.length - i - 2) {
        commentary =
          commentary + ` ${array[array.length - 1 - i].value} is now sorted.`;
        numSorted++;
      }

      yield {
        array,
        comparedIndicies,
        commentary,
        step,
        numSorted,
      };
      comparedIndicies = [];
    }
  }

  return {
    array,
    comparedIndicies: null,
    commentary: "Algorithm finished.",
    step: "end",
    numSorted: array.length,
  };
};

export default bubble_sort;
