function subsetSum(nums, target) {
  // Your code here:
  console.log(nums);
  console.log(target);
​
  const sums = new Set([0]);
​
  for (const num of nums) {
    const sumsCopy = [...sums];
    for (const sum of sumsCopy) {
      const actualSum = num + sum;
      if (actualSum === target) return true;
      if (actualSum < target) sums.add(actualSum);
      console.log(sums);
    }
  }
  return false;
}
// O(2^N)
console.log(subsetSum([1, 2, 10, 5, 3], 9)); // true
​
module.exports = subsetSum;