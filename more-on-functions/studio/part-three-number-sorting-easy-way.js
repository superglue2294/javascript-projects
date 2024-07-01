//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

console.log(nums1.sort((a, b) => a - b));
console.log(nums2.sort((a, b) => a - b));
console.log(nums3.sort((a, b) => a - b));

//Sort each array in descending order.

console.log(nums1.sort((a, b) => b - a));
console.log(nums2.sort((a, b) => b - a));
console.log(nums3.sort((a, b) => b - a));

// Yes. The sort method will alter the original array.
// Yes. The sorting function from part 2/B altered the original array.