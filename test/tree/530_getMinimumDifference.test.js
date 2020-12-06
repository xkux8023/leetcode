import { TreeNode } from '../../model'
import getMinimumDifference from '../../code/tree/530_getMinimumDifference'

const E = new TreeNode(4, null)
const D = new TreeNode(1, null)
const C = new TreeNode(5, E)
const B = new TreeNode(2, D)
const A = new TreeNode(3, B, C)

test('getMinimumDifference(A)', () => {
  expect(getMinimumDifference(A)).toEqual(1)
})
