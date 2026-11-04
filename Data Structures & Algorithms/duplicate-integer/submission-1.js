class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (myMap.has(nums[i])) {
                return true;
            } else {
                myMap.set(nums[i], i);
            }
        }
        return false;
    }
}
