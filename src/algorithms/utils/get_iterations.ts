import {
  BubbleSortArray,
  BubbleSortFn,
  BubbleSortIteration,
} from "../bubble_sort";

type GetIterationsFn = (
  generatorFn: BubbleSortFn,
  initial: BubbleSortArray
) => BubbleSortIteration[];

const getIterations: GetIterationsFn = function (generatorFn, initial) {
  const iterations: BubbleSortIteration[] = [];
  const generator = generatorFn(initial);
  let done = false;

  iterations.push({
    array: [...initial],
    comparedIndicies: null,
    commentary:
      "Bubble sort checks each element with the next. Swapping them if the latter is smaller.",
    lineNums: [2],
  });

  while (!done) {
    const { value: iteration, done: genDone } = generator.next();

    iterations.push({ ...iteration, array: [...iteration.array] });

    if (genDone) {
      done = genDone;
    }
  }

  return iterations;
};

export default getIterations;
