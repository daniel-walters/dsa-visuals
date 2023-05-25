export default function getRandomArray(length: number) {
  const arr = [];

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }

  return arr;
}
