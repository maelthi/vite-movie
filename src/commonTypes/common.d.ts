type Movie = {
  dateSortie: number
  directeur: string
  genre: string
  id: number
  pochette: string
  resume: string
  titre: string
  acteurs: Actors
}

type Actors = string[]
