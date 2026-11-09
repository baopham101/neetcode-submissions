class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const needed = target - nums[i];
            if (map.has(needed)) {
                console.log(map);
                return [map.get(needed), i]
            }
            map.set(nums[i], i);
        }
        
        return [0, 0];
    }
}
