import { NTreeNode } from '../../model'
import maxDepth from '../../code/tree/559_maxDepth'

const E = new NTreeNode(5)
const D = new NTreeNode(4)
const C = new NTreeNode(3, [D, E])
const B = new NTreeNode(2)
const A = new NTreeNode(1, [B, C])

test('maxDepth(A)', () => {
  expect(maxDepth(A)).toEqual(3)
})
