export function getFactorial(factorialNumber) {
  function isNaturalNumber(number) {
    return number > 0 && Number.isInteger(number);
  }

  if (factorialNumber === 0) {
    return 1;
  }

  if (!isNaturalNumber(factorialNumber)) {
    throw new Error('Passed number is not natural or 0');
  }

  let result = 1;
  for (let i = 1; i <= factorialNumber; i += 1) {
    result *= i;
  }

  return result;
}
