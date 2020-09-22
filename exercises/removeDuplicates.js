// Given a sorted array nums, remove the duplicates in-place.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example(s):
// Given nums = [0,0,1,1,1,2,2,3,3,4],
// Your function should return length = 5.
// The first 5 elements of nums should be modified to 0, 1, 2, 3, and 4, respectively.


function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0;
    } else {
        let i = 0;
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] !== nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        return i + 1;
    }
}

module.exports = removeDuplicates;