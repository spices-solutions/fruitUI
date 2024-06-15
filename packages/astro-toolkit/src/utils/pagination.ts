function usePagination(current: number, total: number, voidFormat = null) {
  let center: number[]
  if (total < 6) {
    return new Array(total).fill(total).map((v, i) => i + 1)
  }
  if (current > 2) {
    center = [current - 1, current, current + 1]
  }
  if (current === 2) {
    center = [current, current + 1]
  }
  if (current === 1) {
    center = [current + 1, current + 2]
  }
  if (current === total - 1) {
    center = [current - 1, current]
  }
  if (current === total) {
    center = [current - 2, current - 1]
  }

  const arr = [1, ...center, total]
  console.log(arr)
  if (arr.length < 2) {
    return arr // If the array has fewer than 2 elements, no changes are needed
  }

  const result = [arr[0]] // Start with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      result.push(voidFormat) // Add dots if the current number is not consecutive
    }
    result.push(arr[i]) // Add the current number
  }
  return result
}
export default usePagination
