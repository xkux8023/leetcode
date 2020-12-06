var maxDepth = function (root) {
  return traverse(root)
}
function traverse (node) {
  if (!node) return 0
  let maxLevel = 1
  for (let child of node.children) {
    maxLevel = Math.max(traverse(child) + 1, maxLevel)
  }
  return maxLevel
}

export default maxDepth
