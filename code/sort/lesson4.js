export default (array) => {
  array.filter(item => item > 0)
  for (let i = 0, len = array.length, min; i < len; i++) {
    min = array[i]
    for (let j = i + 1; j < len; j++) {
      if (array[j] < min) {
        let c = min
        min = array[j]
        array[j] = c
      }
    }
    array[i] = min
    if (i > 0) {
      if (array[i] - array[i - 1] > 1) {
        return array[i - 1] + 1
      }
    } else {
      if (min !== 1) {
        return 1
      }
    }
  }
  return array.length ? array.pop() + 1 : 1
}
