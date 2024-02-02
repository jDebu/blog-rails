export const truncateText = (text, maxLength) => (text.length > maxLength ? `${text.slice(0, maxLength)}...` : text)
export const setItemToLocalStorage = (key, value) => localStorage.setItem(key, value)
export const getItemFromLocalStorage = key => localStorage.getItem(key)
export const getJsonItemFromLocalStorage = key => JSON.parse(getItemFromLocalStorage(key))
export const removeItemFromLocalStorage = keys => keys.map(key => localStorage.removeItem(key))
