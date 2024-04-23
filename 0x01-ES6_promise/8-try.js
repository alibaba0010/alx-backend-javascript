export default function divideFunction(numerator, denominator) {
  if (denominator !== 0) {
    const result = numerator / denominator;

    return result;
  }

  throw Error('cannot divide by 0');
}
