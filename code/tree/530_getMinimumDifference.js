var getMinimumDifference = function (root) {
  if (!root) return 0
  let pre = null
  let min = Number.MAX_VALUE
  traverse(root)
  return min
  function traverse (node) {
    if (!node) return
    traverse(node.left)
    if (pre != null) {
      min = Math.min(min, node.val - pre.val)
    }
    pre = node
    traverse(node.right)
  }
}

export default getMinimumDifference
