/**
 * Finds the index of the minimum element in a rotated sorted array.
 *
 * @param {number[]} rotatedSortedArr The rotated sorted array.
 * @returns {number} The index of the minimum element.
 */
function findMinIndex(rotatedSortedArr) {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (rotatedSortedArr[mid] > rotatedSortedArr[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left; // Index of the minimum element
}

/**
 * Performs binary search for a target value in a sorted array.
 *
 * @param {number[]} arr The sorted array.
 * @param {number} target The value to search for.
 * @param {number} left The starting index of the search range.
 * @param {number} right The ending index of the search range.
 * @returns {number} The index of the target value if found, -1 otherwise.
 */
function binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1; // Target not found
}

/**
 * Searches for a target value in a rotated sorted array.
 *
 * @param {number[]} nums The rotated sorted array.
 * @param {number} target The value to search for.
 * @returns {number} The index of the target value if found, -1 otherwise.
 */
function search(nums, target) {
  if (nums.length === 0) return -1; // Handle empty array case

  const minIndex = findMinIndex(nums);

  // Check if target is in the range of the first segment
  if (minIndex > 0 && target >= nums[0] && target < nums[minIndex]) {
    return binarySearch(nums, target, 0, minIndex - 1); // Search in the left segment
  }

  // Search in the right segment
  return binarySearch(nums, target, minIndex, nums.length - 1); // Search in the right segment
}

// Time complexity: O(log N)
// Space complexity: O(1)
