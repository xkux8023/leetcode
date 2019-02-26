import flowerbed from '../../code/array/lesson3'

test('flowerbed:([1,0,0,0,1],1)', () => {
  expect(flowerbed([1, 0, 0, 0, 1], 1)).toBe(true)
})

test('flowerbed:([1,0,0,0,1],2)', () => {
  expect(flowerbed([1, 0, 0, 0, 1], 2)).toBe(false)
})

test('flowerbed:([0], 1)', () => {
  expect(flowerbed([0], 1)).toBe(true)
})
