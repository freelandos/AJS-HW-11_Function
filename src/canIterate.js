export default function canIterate(object) {
  try {
    object[Symbol.iterator]()
    return true
  } catch {
    return false
  }
}
