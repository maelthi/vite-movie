import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "@pages/Home/Home"

import "./App.css"

if (import.meta.hot) {
  import.meta.hot.on("vit e:beforeUpdate", () => console.clear())
}

const MoviesComponent = lazy(() => import("@pages/Movies/Movies"))
const ActorsComponent = lazy(() => import("@pages/Actors/Actors"))
const ActorComponent = lazy(() => import("@pages/Actor/Actor"))
const MovieComponent = lazy(() => import("@pages/Movie/Movie"))

const App = () => (
  <div className="app">
    <Suspense
      fallback={<div className="app__loading-screen">Chargement...</div>}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesComponent />} />
          <Route path="/actors" element={<ActorsComponent />} />
          <Route path="/actors/:id" element={<ActorComponent />} />
          <Route path="/movies/:id" element={<MovieComponent />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </div>
)

export default App
