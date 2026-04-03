import { getRandomNumber, cleanPictureName, sliceText, isMovie } from "./helpers"

describe("getRandomNumber", () => {
  it("retourne un nombre entre min et max", () => {
    expect(getRandomNumber(1, 10)).toBeGreaterThanOrEqual(1)
    expect(getRandomNumber(1, 10)).toBeLessThanOrEqual(10)
  })

  it("retourne min quand min === max", () => {
    expect(getRandomNumber(5, 5)).toBe(5)
  })
})

describe("cleanPictureName", () => {
  it("supprime l'extension du nom de fichier", () => {
    expect(cleanPictureName("photo.jpg")).toBe("photo")
  })

  it("retourne undefined si le nom est vide", () => {
    expect(cleanPictureName("")).toBeUndefined()
  })

  it("gère les extensions longues", () => {
    expect(cleanPictureName("image.jpeg")).toBe("image")
  })
})

describe("sliceText", () => {
  it("retourne le texte tel quel s'il fait moins de 200 caractères", () => {
    const short = "Texte court"
    expect(sliceText(short)).toBe(short)
  })

  it("tronque le texte à 200 caractères et ajoute '...'", () => {
    const long = "a".repeat(250)
    const result = sliceText(long)
    expect(result).toHaveLength(203)
    expect(result.endsWith("...")).toBe(true)
  })

  it("gère exactement 200 caractères sans tronquer", () => {
    const exact = "a".repeat(200)
    expect(sliceText(exact)).toBe(exact)
  })
})

describe("isMovie", () => {
  const movie: Movie = {
    id: 1,
    titre: "Le Bon la Brute et le Truand",
    resume: "Un western légendaire",
    pochette: "photo.jpg",
    genre: "Western",
    directeur: "Sergio Leone",
    dateSortie: 1966,
    acteurs: ["Clint Eastwood"],
  }

  const actor: Actor = {
    id: "1",
    patronyme: "Clint Eastwood",
    photo: "clint.jpg",
    apparitions: ["Le Bon la Brute et le Truand"],
  }

  it("retourne true pour un film", () => {
    expect(isMovie(movie)).toBe(true)
  })

  it("retourne false pour un acteur", () => {
    expect(isMovie(actor)).toBe(false)
  })
})
