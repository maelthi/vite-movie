export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

export const cleanPictureName = (name: string): string => {
  const endIndex = name.indexOf(".")
  return name.substring(0, endIndex)
}

export const sliceText = (text: string): string =>
  text.length > 200 ? `${text.substring(0, 200)}...` : text
