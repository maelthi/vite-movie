# Code Review — vite-movie

> Analyse du dépôt effectuée le 2026-04-03

---

## Table des matières

1. [Vue d'ensemble](#1-vue-densemble)
2. [Structure du projet](#2-structure-du-projet)
3. [Stack technique & dépendances](#3-stack-technique--dépendances)
4. [Architecture](#4-architecture)
5. [Fonctionnalités principales](#5-fonctionnalités-principales)
6. [Qualité du code](#6-qualité-du-code)
7. [Configuration](#7-configuration)
8. [Tests](#8-tests)
9. [Styling](#9-styling)
10. [Historique git](#10-historique-git)
11. [Recommandations](#11-recommandations)

---

## 1. Vue d'ensemble

**Vite-Movie** ("Arch Stanton Movies") est une Progressive Web App (PWA)
référençant un catalogue de films américains classiques et leurs acteurs.
L'interface est en français.

| Donnée            | Valeur                             |
| ----------------- | ---------------------------------- |
| Films indexés     | 140                                |
| Acteurs indexés   | 71                                 |
| Langue UI         | Français                           |
| Déploiement cible | Vercel                             |
| Backend           | Firebase Firestore (lecture seule) |

---

## 2. Structure du projet

```
vite-movie/
├── src/
│   ├── assets/
│   │   ├── fonts/           # Open Sans (3 graisses) + Abril Fatface
│   │   ├── icons/           # SVG (logo, loader, read-more)
│   │   └── scss/
│   │       └── variables.scss
│   ├── commonTypes/
│   │   └── common.d.ts      # Types Movie et Actor
│   ├── components/
│   │   └── molecules/
│   │       ├── FullCard/    # Carte bannière (grande)
│   │       ├── SemiCard/    # Carte avec aperçu texte
│   │       ├── SearchBar/   # Input de recherche
│   │       ├── SearchItems/ # Affichage des résultats
│   │       └── SvgIcon/     # Rendu d'icônes SVG
│   ├── pages/
│   │   ├── Home/            # Container + Component
│   │   ├── Movies/          # Liste des films
│   │   ├── Movie/           # Détail d'un film
│   │   ├── Actors/          # Liste des acteurs
│   │   └── Actor/           # Détail d'un acteur
│   ├── services/
│   │   ├── firebaseConfig.ts
│   │   └── services.ts      # Requêtes Firestore
│   ├── utils/helpers/
│   │   ├── helpers.ts
│   │   └── helpers.test.ts
│   ├── App.tsx              # Routing principal
│   ├── App.css
│   └── index.tsx            # Point d'entrée + enregistrement PWA
├── public/                  # Assets statiques (images, icônes PWA)
├── docs/
│   └── REVIEW.md            # Ce fichier
├── vite.config.ts
├── tsconfig.json
├── jest.config.ts
├── .eslintrc
├── .prettierrc
├── vercel.json
├── index.html
└── package.json
```

---

## 3. Stack technique & dépendances

### Runtime

| Librairie        | Version | Rôle                          |
| ---------------- | ------- | ----------------------------- |
| React            | 17.0.2  | Framework UI                  |
| TypeScript       | 4.4.4   | Typage statique               |
| React Router DOM | 6.1.1   | Routing SPA                   |
| Firebase         | 9.6.1   | Base de données Firestore     |
| react-anime      | 4.1.1   | Animations (wrapper anime.js) |
| SASS             | 1.44.0  | Préprocesseur CSS             |

### Build & outillage

| Outil                 | Version | Rôle                           |
| --------------------- | ------- | ------------------------------ |
| Vite                  | 2.7.0   | Bundler / serveur de dev       |
| vite-plugin-pwa       | 0.11.12 | PWA (manifest, service worker) |
| vite-plugin-svg-icons | 1.1.0   | Sprite SVG automatique         |
| ESLint                | 8.4.1   | Linting                        |
| Prettier              | 2.5.1   | Formatage                      |

### Tests

| Outil                  | Version | Rôle                         |
| ---------------------- | ------- | ---------------------------- |
| Jest                   | 27.4.7  | Runner de tests              |
| @testing-library/react | 12.1.2  | Tests de composants          |
| ts-jest                | 27.1.2  | Support TypeScript dans Jest |

### Commandes disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run preview      # Prévisualisation du build
npm run test         # Tests avec couverture
npm run test:watch   # Tests en mode watch
npm run lint         # ESLint
npm run format       # Prettier
npm run validate     # check-types + build + format
npm run check-types  # Vérification TypeScript uniquement
```

---

## 4. Architecture

### Pattern : Container / Component

Les pages utilisent une séparation claire entre logique (Container) et
présentation (Component), visible notamment sur `Home/` :

```
Home.container.tsx  →  gestion d'état, appels Firebase, localStorage
Home.component.tsx  →  rendu pur à partir des props
```

### Routing (App.tsx)

```
/              →  Home (recherche + accès rapide)
/movies        →  Movies (liste)
/movies/:id    →  Movie (détail)
/actors        →  Actors (liste)
/actors/:id    →  Actor (détail)
```

Toutes les pages sont chargées en **lazy loading** (`React.lazy` + `Suspense`).

### Gestion des données

```
Firebase Firestore
      ↓ (premier chargement)
localStorage (cache)
      ↓ (visites suivantes)
État React (useState)
```

Les collections Firestore (`movies`, `actors`) sont récupérées une seule fois
puis mises en cache dans le `localStorage`. Les lectures suivantes utilisent
directement le cache.

### Types principaux (`common.d.ts`)

```typescript
type Movie = {
  id: number
  titre: string
  resume: string
  directeur: string
  genre: string
  dateSortie: number
  pochette: string // URL image
  acteurs: string[] // noms des acteurs
}

type Actor = {
  id: string
  patronyme: string
  photo: string // URL image
  apparitions: string[] // titres de films
}
```

---

## 5. Fonctionnalités principales

### Page d'accueil

- **Film du jour** : sélection aléatoire via `getRandomNumber()`
- **Recherche en temps réel** sur les films et acteurs (par titre / patronyme)
- Accès rapide aux sections Films et Acteurs via des cartes illustrées

### Films

- Liste de 140 films avec affiche, titre et résumé
- Page détail : titre, directeur, genre, date de sortie, synopsis, casting
- Navigation retour (actuellement `history.back()`)

### Acteurs

- Liste de 71 acteurs triée alphabétiquement
- Nombre d'apparitions affiché sur la carte
- Page détail : photo, liste des films avec lien cliquable vers chaque film

### PWA

- Manifest configuré (icônes 192×512, thème violet `#312037`)
- Service worker avec stratégie d'auto-update
- Capable de fonctionner hors ligne (données en cache localStorage)

---

## 6. Qualité du code

### Points forts

- **TypeScript strict** activé, typage cohérent sur l'ensemble du projet
- **Séparation des responsabilités** claire (pages, composants, services, utils)
- **Composants réutilisables** bien abstraits (`SvgIcon`, `SemiCard`,
  `FullCard`)
- **Code splitting** avec lazy loading sur toutes les routes
- **Infrastructure de test** Jest + RTL en place
- **Outillage complet** : ESLint, Prettier, type-check intégrés au workflow

### Problèmes identifiés

#### Critique

**1. Conflit de fusion non résolu** —
`src/components/molecules/Home/Home.component.tsx` (lignes 3–6)

```tsx
<<<<<<< HEAD
import Anime from "react-anime"
=======
>>>>>>> 099aa891a3fcc5c1e4ed6cbab101e0aa1171378f
```

Le fichier contient des marqueurs de conflit Git. L'import de `react-anime` est
présent dans HEAD mais n'est jamais utilisé dans le composant.

---

**2. Clé API Firebase exposée** — `src/services/firebaseConfig.ts`

Les credentials Firebase (apiKey, authDomain, projectId…) sont écrits en dur
dans le code source versionné. Ils devraient être externalisés dans des
variables d'environnement :

```ts
// Mauvaise pratique actuelle
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "...",
}

// Bonne pratique
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
}
```

---

#### Majeur

**3. Bug dans la fusion des données de recherche** —
`src/pages/Home/Home.container.tsx` (ligne ~35)

L'opérateur spread est mal utilisé sur un objet JSON parsé au lieu d'un tableau
:

```ts
// Problématique
const data = {
  ...JSON.parse(getDataLocalStorage("movies")),
  ...JSON.parse(getDataLocalStorage("actors")),
}

// Attendu
const data = [
  ...JSON.parse(getDataLocalStorage("movies")),
  ...JSON.parse(getDataLocalStorage("actors")),
]
```

---

**4. Navigation dépréciée** — `src/pages/Actor/Actor.tsx` (ligne ~19) et
`src/pages/Movies/Movies.tsx` (ligne ~21)

```tsx
// Déprécié
<button onClick={() => history.back()}>Retour</button>

// À remplacer par
const navigate = useNavigate()
<button onClick={() => navigate(-1)}>Retour</button>
```

---

#### Mineur

**5. Type `any[]` dans l'état** — `src/pages/Home/Home.container.tsx` (ligne
~14)

```ts
const [searchData, setSearchData] = useState<any[]>([])
// → préférer : useState<(Movie | Actor)[]>([])
```

**6. `localStorage` sans validation**

`JSON.parse` est appelé directement sans vérification préalable. Une donnée
corrompue en cache ferait planter silencieusement l'application.

```ts
// Fragile
const data = JSON.parse(localStorage.getItem("movies") || "[]")

// Plus robuste
try {
  const data = JSON.parse(localStorage.getItem("movies") || "[]")
} catch {
  localStorage.removeItem("movies")
}
```

**7. Gestion d'erreur incohérente dans les services** —
`src/services/services.ts`

Les blocs `catch` retournent l'objet `Error` au lieu de `null` ou `[]`, ce qui
peut casser les contrats de type en aval.

**8. Absence d'Error Boundaries**

Aucun composant `ErrorBoundary` n'est défini. Une erreur dans le rendu d'une
page crashe l'application entière sans message d'erreur utilisateur.

---

## 7. Configuration

### `vite.config.ts`

- Aliases de chemins configurés : `@molecules`, `@organisms`, `@pages`,
  `@assets`, `@services`, `@helpers`
- Plugin SVG avec symbol ID au format `icon-[dir]-[name]`
- PWA avec enregistrement automatique du service worker

### `vercel.json`

Réécriture SPA : toutes les routes renvoient vers `index.html` (nécessaire pour
React Router).

### `.prettierrc`

- Guillemets doubles, pas de point-virgule, virgules finales (`all`), largeur 80

### `tsconfig.json`

- `strict: true`, target `ESNext`, `moduleResolution: node`
- Aliases correspondant à ceux de Vite

---

## 8. Tests

### Couverture actuelle

| Fichier              | Type     | Ce qui est testé                              |
| -------------------- | -------- | --------------------------------------------- |
| `SearchBar.test.tsx` | Snapshot | Rendu du composant avec props                 |
| `helpers.test.ts`    | Unitaire | `getRandomNumber()` — vérification des bornes |

### Ce qui manque

- Tests des pages (Home, Movies, Actors, Movie, Actor)
- Tests des services Firebase (avec mock Firestore)
- Tests des composants `SemiCard`, `FullCard`, `SearchItems`
- Tests du cache localStorage
- Tests d'intégration / E2E

### Commande

```bash
npm run test          # Jest --coverage
npm run test:watch    # Mode watch
```

---

## 9. Styling

### Palette de couleurs

| Variable  | Valeur    | Usage                          |
| --------- | --------- | ------------------------------ |
| Primary   | `#312037` | Fond principal, violet foncé   |
| Accent    | `#dd0c0c` | Rouge, CTA                     |
| Light     | `#e0d2e5` | Bleu clair, textes secondaires |
| Dark text | `#545454` | Gris, corps de texte           |

### Typographie

- **Abril Fatface** — titres display
- **Open Sans** — corps de texte (Regular 400, Light 300, Medium 500)

### Mixins SCSS notables

```scss
@mixin title // Standardisation des titres
  @mixin movieBackground // Overlay gradient sur les images
  @mixin laptop // Breakpoint responsive ≥ 1200px
  @function rem($px) // Conversion px → rem
  @keyframes rotation; // Animation spinner
```

Le projet contient ~435 lignes de SCSS réparties sur 10 fichiers.

---

## 10. Historique git

**Dépôt :** `maelthi/vite-movie`  
**Branche de développement :** `develop`  
**18 commits** au total, projet démarré fin 2021.

| Hash      | Message                            |
| --------- | ---------------------------------- |
| `055d3d5` | Adding jest to the project         |
| `5954404` | Merge branch develop               |
| `099aa89` | Add SVG plugin to handle icons     |
| `b3dc3f7` | Building the SearchBar input       |
| `bff652e` | Adding animations                  |
| `1a4db42` | Building the actor page            |
| `328b90f` | Building the actors list page      |
| `cf5d5be` | Building the movies page           |
| `8e937cd` | Building the semiCard              |
| `e0efb59` | Initialize Firestore               |
| `4e99e45` | Building the Home page             |
| `cc997b2` | Init Movie app with React and Vite |

---

## 11. Recommandations

### Priorité haute

1. **Résoudre le conflit de fusion** dans `Home.component.tsx` et supprimer
   l'import inutilisé de `react-anime`
2. **Externaliser les credentials Firebase** dans un fichier `.env` (et ajouter
   `.env` au `.gitignore`)
3. **Corriger le bug de spread** dans la construction de `searchData`
   (Home.container.tsx)

### Priorité moyenne

4. **Remplacer `history.back()`** par `useNavigate(-1)` (Actor.tsx, Movies.tsx)
5. **Typer l'état `searchData`** avec `(Movie | Actor)[]` à la place de `any[]`
6. **Ajouter un ErrorBoundary** global autour du Router dans `App.tsx`
7. **Sécuriser les lectures localStorage** avec try/catch et invalidation du
   cache en cas d'erreur

### Priorité basse

8. **Étendre la couverture de tests** : pages, services (avec mock Firebase),
   composants
9. **Envisager une migration** vers React 18 et Vite 4+/5+ (versions actuelles
   datant de 2021–2022)
10. **Documenter les variables d'environnement** dans un fichier `.env.example`
