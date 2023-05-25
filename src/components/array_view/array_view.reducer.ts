import { BubbleSortIteration } from "@/algorithms/bubble_sort/bubble_sort";

export type ArrayActions =
  | {
      type: "SET_ITERATIONS";
      iterations: BubbleSortIteration[];
    }
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "END" }
  | { type: "RESET" };

export type ArrayState = {
  index: number;
  step: number;
  iterations?: BubbleSortIteration[];
};

export const initialState: ArrayState = {
  index: 0,
  step: 1,
  iterations: undefined,
};

function canIncrement(curIteration: number, numIterations: number) {
  return curIteration < numIterations;
}

function canDecrement(curIteration: number) {
  return curIteration > 0;
}

export default function reducer(
  state: ArrayState,
  action: ArrayActions
): ArrayState {
  const { iterations, index, step } = state;

  switch (action.type) {
    case "SET_ITERATIONS":
      return {
        ...state,
        iterations: action.iterations,
      };
    case "INCREMENT":
      if (iterations && !canIncrement(index, iterations.length - 1)) {
        return state;
      }

      return {
        ...state,
        step: step + 1,
        index: index + 1,
      };
    case "DECREMENT":
      if (!canDecrement(index)) {
        return state;
      }

      return {
        ...state,
        step: step - 1,
        index: index - 1,
      };
    case "END":
      if (iterations && !canIncrement(index, iterations.length)) {
        return state;
      }

      return {
        ...state,
        step: iterations!.length,
        index: iterations!.length - 1,
      };
    case "RESET":
      if (!canDecrement(index)) {
        return state;
      }

      return {
        ...state,
        step: 1,
        index: 0,
      };
  }
}
