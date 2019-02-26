// 605. 种花问题
// 执行用时: 124 ms, 在X of a Kind in a Deck of Cards的JavaScript提交中击败了38 .14 % 的用户
// 内存消耗: 20.1 MB, 在X of a Kind in a Deck of Cards的JavaScript提交中击败了0 .00 % 的用户

export default (flowerbed, n) => {
  if (n === 0) {
    return true
  }
  if (flowerbed.length === 1) {
    if (flowerbed[0] === 0) {
      if (n === 1) {
        return true
      }
    }
    return false
  }
  let max = 0
  for (let i = 0, len = flowerbed.length - 1; i < len; i++) {
    if (i === 0) {
      if (flowerbed[i] === 0) {
        if (flowerbed[0] === 0 && flowerbed[1] === 0) {
          max++
          flowerbed[i] = 1
        }
      }
    } else {
      if (i === flowerbed.length - 2) {
        if (flowerbed[i] === 0 && flowerbed[i + 1] === 0) {
          max++
        }
      } else {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          max++
          flowerbed[i] = 1
        }
      }
    }
  }
  return max >= n
}
