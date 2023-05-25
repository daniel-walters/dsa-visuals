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

const codeMap = {
  javascript,
  go,
};

export default codeMap;
