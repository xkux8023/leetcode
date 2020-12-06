import { TreeNode } from '../../model'
import isSameTree from '../../code/tree/100_isSameTree'

const E = new TreeNode(5, null)
const D = new TreeNode(4, null)
const C = new TreeNode(3, D, E)
const B = new TreeNode(2, null)
const A = new TreeNode(1, B, C)

const T = new TreeNode(5, null)
const S = new TreeNode(4, null)
const R = new TreeNode(3, S, T)
const Q = new TreeNode(2, null)
const P = new TreeNode(11, Q, R)

const Z = new TreeNode(5, null)
const Y = new TreeNode(4, null)
const X = new TreeNode(3, Y, Z)
const U = new TreeNode(2, null)
const V = new TreeNode(1, U, X)

test('isSameTree(A, V)', () => {
  expect(isSameTree(A, V)).toBe(true)
})

test('isSameTree(A, P)', () => {
  expect(isSameTree(A, P)).toBe(false)
})
test('isSameTree(V, P)', () => {
  expect(isSameTree(V, P)).toBe(false)
})
