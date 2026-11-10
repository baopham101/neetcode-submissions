class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();
        for (const str of strs) {
            const sortedWord = str.split("").sort().join("");
            if (!map.has(sortedWord)) {
                map.set(sortedWord, []);
            }
            map.get(sortedWord).push(str);
        }
        return Array.from(map.values());
    }
}
