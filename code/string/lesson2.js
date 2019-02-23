// 696. 计数二进制子串

export default (str) => {
  let r = []
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    return reg.test(str) ? RegExp.$1 : ''
    // if (reg.test(str)) {
    //   return RegExp.$1
    // } else {
    //   return ''
    // }
  }
  for (let i = 0; i < str.length - 1; i++) {
    let sub = match(str.slice(i))
    if (sub) {
      r.push(sub)
    }
  }
  return r
}
