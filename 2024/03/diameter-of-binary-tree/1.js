// https://leetcode.cn/problems/diameter-of-binary-tree/?envType=study-plan-v2&envId=top-100-liked

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let ans = 0;

    function dfs(root) {
        if (!root) return 0;
        let l = dfs(root.left), r = dfs(root.right);
        ans = Math.max(ans, l + r);
        return Math.max(l, r) + 1;
    }

    dfs(root);

    return ans;
};