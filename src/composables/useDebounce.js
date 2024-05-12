export const useDebounce = (callback, timeoutMS = 500) => {
  let timeout = null

  return (...args) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => callback(...args), timeoutMS)
  }
}