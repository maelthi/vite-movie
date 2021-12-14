import { lazy, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "@pages/Home/Home"

import "./App.css"

if (import.meta.hot) {
  import.meta.hot.on("vite:beforeUpdate", () => console.clear())
}

const MoviesComponent = lazy(() => import("@pages/Movies/Movies"))
const ActorsComponent = lazy(() => import("@pages/Actors/Actors"))

const App = () => (
  <div className="app">
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesComponent />} />
          <Route path="/actors" element={<ActorsComponent />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  </div>
)

export default App
