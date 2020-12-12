export function isNaturalNumber(number) {
  return number > 0 && Number.isInteger(number);
}

export function getFactorial(number) {
  if (number === 0) {
    return 1;
  }

  if (!isNaturalNumber(number)) {
    throw new Error('Passed number is not natural or 0');
  }

  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
  }

  return result;
}
