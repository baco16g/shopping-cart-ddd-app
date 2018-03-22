/* @flow */

export function loadLocalStorageByKey(key: string): Promise<*> {
  return new Promise(resolve => {
    const serializedSrc = window.localStorage.getItem(key)
    const deserializedSrc = JSON.parse(serializedSrc)
    resolve(deserializedSrc)
  })
}

export function saveLocalStorageByKey(src: any, key: string): Promise<void> {
  return new Promise(resolve => {
    const serializedSrc = JSON.stringify(src)
    window.localStorage.setItem(key, serializedSrc)
    resolve()
  })
}

export function deleteLocalStorageByKey(key: string): Promise<void> {
  return new Promise(resolve => {
    window.localStorage.removeItem(key)
    resolve()
  })
}

export function loadSessionStorageByKey(key: string): Promise<*> {
  return new Promise(resolve => {
    const serializedSrc = window.sessionStorage.getItem(key)
    const deserializedSrc = JSON.parse(serializedSrc)
    resolve(deserializedSrc)
  })
}

export function saveSessionStorageByKey(src: any, key: string): Promise<void> {
  return new Promise(resolve => {
    const serializedSrc = JSON.stringify(src)
    window.sessionStorage.setItem(key, serializedSrc)
    resolve()
  })
}

export function deleteSessionStorageByKey(key: string): Promise<void> {
  return new Promise(resolve => {
    window.sessionStorage.removeItem(key)
    resolve()
  })
}

export function wait(duration: number = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, duration)
  })
}
