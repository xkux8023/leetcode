// 914. 卡牌分组
// 执行用时: 124 ms, 在X of a Kind in a Deck of Cards的JavaScript提交中击败了38 .14 % 的用户
// 内存消耗: 20.1 MB, 在X of a Kind in a Deck of Cards的JavaScript提交中击败了0 .00 % 的用户

export default (arr) => {
  arr.sort((a, b) => a - b)
  let min = Number.MAX_SAFE_INTEGER
  let dst = []
  let result = true
  for (let i = 0, len = arr.length, tmp = []; i < len; i++) {
    tmp.push(arr[i])
    for (let j = i + 1; j < len + 1; j++) {
      if (arr[i] === arr[j]) {
        tmp.push(arr[j])
      } else {
        if (min > tmp.length) {
          min = tmp.length
        }
        dst.push([].concat(tmp))
        tmp.length = 0
        i = j - 1
        break
      }
    }
  }
  function gcd (a, b) {
    if (a % b === 0) {
      return b
    }
    return gcd(b, a % b)
  }
  dst.map(item => {
    if (gcd(item.length, min) === 1) {
      result = false
      return false
    }
  })
  return result
}
