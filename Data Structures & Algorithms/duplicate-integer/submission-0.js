class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const myMap = new Map();
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (myMap.has(nums[i])) {
                count++;
            } else {
                myMap.set(nums[i], i);
            }
        }
        if (count > 0) {
            return true;
        } else {
            return false;
        }
    }
}
