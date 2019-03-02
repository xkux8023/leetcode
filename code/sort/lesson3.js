export default (array, k) => {
  let len = array.length - 1
  for (let i = len, tmp; i > len - k; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
      }
    }
  }
  return array[len - (k - 1)]
}
