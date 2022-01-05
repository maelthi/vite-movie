export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const cleanPictureName = (name: string): string | undefined => {
  if (!name) {
    return
  }
  const endIndex = name.indexOf(".")
  return name.substring(0, endIndex)
}

export const sliceText = (text: string): string =>
  text && text.length > 200 ? `${text.substring(0, 200)}...` : text

export const storeDataLocalStorage = (
  key: string,
  value: Movie[] | Actor[],
): void => {
  if (key && value.length > 0) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const getDataLocalStorage = (key: string) =>
  localStorage.getItem(key) || "[]"

export const isMovie = (data: Movie | Actor): boolean =>
  Boolean(Object.keys(data).length > 4)
