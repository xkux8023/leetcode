export function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
export function NTreeNode (val, children = []) {
  this.val = (val === undefined ? 0 : val)
  this.children = children
}
