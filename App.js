var goodNodes = function (root) {
    if (!root) return 0
    let maxNodeUptilNow = root.val
    let count = 1
    function dfs(newRoot, currentMax) {
        if (!newRoot) return;
        if (newRoot.val >= currentMax) {
            count++
            currentMax = newRoot.val
        }
        dfs(newRoot.left, currentMax)
        dfs(newRoot.right, currentMax)
    }

    dfs(root.left, maxNodeUptilNow)
    dfs(root.right, maxNodeUptilNow)

    return count
};