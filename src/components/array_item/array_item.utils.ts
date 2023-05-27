const MIN_HEIGHT = `32px`;

export function getHeight(arrayValue: number, maxArrayValue?: number) {
  const percentage = (arrayValue / (maxArrayValue || arrayValue)) * 100;

  return `calc(${percentage}% + ${MIN_HEIGHT})`;
}
