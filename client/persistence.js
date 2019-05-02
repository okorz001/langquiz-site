export function save(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
}

export function load(key) {
    const value = window.localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
    return undefined
}

export function clear(key) {
    window.localStorage.removeItem(key)
}
