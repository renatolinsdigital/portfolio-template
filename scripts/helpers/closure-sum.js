const createSumFunction = () => {
  let sum = 0; // Variable local to the closure function

  // Closure function that adds a value to the local sum
  const add = value => {
    sum += value;
    return sum;
  };

  return add; // Return the closure function
};

export default createSumFunction;
