import { BubbleSortArray } from "@/algorithms/bubble_sort/bubble_sort";

export default function transformArray(array: number[]): BubbleSortArray {
  return array.map((e, i) => ({ value: e, id: `${e}-${i}` }));
}
