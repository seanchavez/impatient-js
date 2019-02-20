export function findMax(nums) {
  if (nums[0] === undefined) return -Infinity;
  let max = nums[0];
  for (const num of nums) {
    if (num > max) max = num;
  }
  return max;
}
