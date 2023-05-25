export type BubbleSortArrayElement = {
  id: string;
  value: number;
};

export type BubbleSortIteration = {
  array: BubbleSortArray;
  comparedIndicies: number[] | null;
  commentary: string;
  outerLoop?: number;
  innerLoop?: number;
  lineNums?: number[];
};

export type BubbleSortArray = BubbleSortArrayElement[];

export type BubbleSortFn = (
  array: BubbleSortArray
) => Generator<BubbleSortIteration, BubbleSortIteration, unknown>;

const bubble_sort: BubbleSortFn = function* bubble_sort(array) {
  let comparedIndicies: number[] = [];
  let lineNums: number[] = [];
  let commentary = "";

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      comparedIndicies = [j, j + 1];
      commentary = `${array[j + 1].value} is greater than or equal to ${
        array[j].value
      }, so they remain where they are.`;
      yield {
        array,
        comparedIndicies,
        innerLoop: j,
        outerLoop: i,
        commentary: `Compare ${array[j].value} with ${array[j + 1].value}`,
        lineNums: [4],
      };
      if (array[j + 1].value < array[j].value) {
        commentary = `${array[j + 1].value} is less than ${
          array[j].value
        }, so they swap places.`;
        lineNums = [5, 6, 7];
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      } else {
        lineNums = [8];
      }

      if (j === array.length - i - 2) {
        commentary =
          commentary + ` ${array[array.length - 1 - i].value} is now sorted.`;
      }

      yield {
        array,
        comparedIndicies,
        commentary,
        innerLoop: j,
        outerLoop: i,
        lineNums,
      };
      comparedIndicies = [];
    }
  }

  return {
    array,
    comparedIndicies: null,
    commentary: "Algorithm finished.",
    lineNums: [11],
  };
};

export default bubble_sort;
