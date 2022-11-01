export function deepCopy<T>(target: T): T {
  if (target === null) {
    return target
  }
  if (target instanceof Date) {
    return new Date(target.getTime()) as any
  }

  if (typeof target === 'object') {
    if (typeof target[Symbol.iterator as keyof T] === 'function') {
      const cp = [] as any[]
      if ((target as any[]).length > 0) {
        for (const arrayMember of target as any[]) {
          cp.push(deepCopy(arrayMember))
        }
      }
      return cp as T
    } else {
      const targetKeys = Object.keys(target)
      const cp = {} as T
      if (targetKeys.length > 0) {
        for (const key of targetKeys) {
          cp[key as keyof T] = deepCopy(target[key as keyof T])
        }
      }

      return cp
    }
  }

  return target
}
